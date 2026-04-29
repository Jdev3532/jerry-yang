import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const WEEKS = 53;
const DAYS = 7;
const VISITOR_BASE = 1109;
const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LABELS = ["Mon", "Wed", "Fri"];

function toISODate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getLevel(count: number) {
  if (count <= 0) return 0;
  if (count < 3) return 1;
  if (count < 6) return 2;
  if (count < 12) return 3;
  return 4;
}

const LEVEL_CLASSES = [
  "bg-muted/30",
  "bg-primary/20",
  "bg-primary/45",
  "bg-primary/70",
  "bg-primary",
];

export default function VisitorHeatmap() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const since = new Date();
      since.setDate(since.getDate() - WEEKS * DAYS);
      const { data } = await supabase
        .from("visitor_daily_stats")
        .select("visit_date, count")
        .gte("visit_date", toISODate(since))
        .order("visit_date", { ascending: true });
      if (cancelled || !data) return;
      const map: Record<string, number> = {};
      let sum = 0;
      for (const row of data) {
        const c = Number(row.count) || 0;
        map[row.visit_date as unknown as string] = c;
        sum += c;
      }
      setCounts(map);
      setTotal(sum);
    };
    load();
    return () => { cancelled = true; };
  }, []);

  const grid = useMemo(() => {
    // End on today; align grid so the rightmost column ends on today's weekday.
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Use Monday-first week (matches GitHub-style with Mon/Wed/Fri labels)
    const todayDow = (today.getDay() + 6) % 7; // 0=Mon..6=Sun
    const totalCells = WEEKS * DAYS;
    const start = new Date(today);
    start.setDate(today.getDate() - (totalCells - 1 - (DAYS - 1 - todayDow)));
    // Build column-major grid: weeks[w][d]
    const weeks: { date: Date; iso: string; count: number }[][] = [];
    for (let w = 0; w < WEEKS; w++) {
      const col: { date: Date; iso: string; count: number }[] = [];
      for (let d = 0; d < DAYS; d++) {
        const cur = new Date(start);
        cur.setDate(start.getDate() + w * DAYS + d);
        const iso = toISODate(cur);
        col.push({ date: cur, iso, count: counts[iso] ?? 0 });
      }
      weeks.push(col);
    }
    return weeks;
  }, [counts]);

  const monthMarkers = useMemo(() => {
    const markers: { week: number; label: string }[] = [];
    let lastMonth = -1;
    grid.forEach((col, w) => {
      const m = col[0].date.getMonth();
      if (m !== lastMonth) {
        markers.push({ week: w, label: MONTH_LABELS[m] });
        lastMonth = m;
      }
    });
    return markers;
  }, [grid]);

  const isFuture = (d: Date) => {
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    return d.getTime() > today.getTime();
  };

  return (
    <motion.div
      className="card-surface p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h3 className="text-sm font-medium text-foreground">
          {(VISITOR_BASE + total).toLocaleString()} visits in the last year
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Less</span>
          {LEVEL_CLASSES.map((cls, i) => (
            <span key={i} className={`h-3 w-3 rounded-sm ${cls}`} aria-hidden />
          ))}
          <span>More</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-flex flex-col gap-1 min-w-full">
          {/* Month labels */}
          <div className="flex gap-1 pl-8 relative h-4">
            {grid.map((_, w) => {
              const marker = monthMarkers.find((m) => m.week === w);
              return (
                <div key={w} className="w-3 text-[10px] text-muted-foreground">
                  {marker?.label ?? ""}
                </div>
              );
            })}
          </div>

          <div className="flex gap-1">
            {/* Day labels */}
            <div className="flex flex-col gap-1 pr-1 w-7">
              {Array.from({ length: DAYS }).map((_, d) => (
                <div key={d} className="h-3 text-[10px] text-muted-foreground leading-3">
                  {d === 0 ? DAY_LABELS[0] : d === 2 ? DAY_LABELS[1] : d === 4 ? DAY_LABELS[2] : ""}
                </div>
              ))}
            </div>

            {/* Grid */}
            {grid.map((col, w) => (
              <div key={w} className="flex flex-col gap-1">
                {col.map((cell, d) => {
                  const future = isFuture(cell.date);
                  const level = future ? 0 : getLevel(cell.count);
                  return (
                    <div
                      key={d}
                      className={`h-3 w-3 rounded-sm ${future ? "bg-transparent" : LEVEL_CLASSES[level]} transition-colors`}
                      title={future ? "" : `${cell.count} visit${cell.count === 1 ? "" : "s"} on ${cell.iso}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}