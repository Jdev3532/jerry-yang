import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const DAYS = 7;
const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LABELS = ["Mon", "Wed", "Fri"];
const AVAILABLE_YEARS = [new Date().getFullYear(), new Date().getFullYear() - 1];

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
  const [year, setYear] = useState<number>(AVAILABLE_YEARS[0]);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const minYear = Math.min(...AVAILABLE_YEARS);
      const maxYear = Math.max(...AVAILABLE_YEARS);
      const { data } = await supabase
        .from("visitor_daily_stats")
        .select("visit_date, count")
        .gte("visit_date", `${minYear}-01-01`)
        .lte("visit_date", `${maxYear}-12-31`)
        .order("visit_date", { ascending: true });
      if (cancelled || !data) return;
      const map: Record<string, number> = {};
      for (const row of data) {
        map[row.visit_date as unknown as string] = Number(row.count) || 0;
      }
      setCounts(map);
    };
    load();
    return () => { cancelled = true; };
  }, []);

  // Build a full-year grid for the selected year
  const { grid, monthMarkers, yearTotal } = useMemo(() => {
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31);
    // Pad start to previous Monday
    const startDow = (start.getDay() + 6) % 7; // 0=Mon..6=Sun
    const gridStart = new Date(start);
    gridStart.setDate(start.getDate() - startDow);
    // Pad end to next Sunday
    const endDow = (end.getDay() + 6) % 7;
    const gridEnd = new Date(end);
    gridEnd.setDate(end.getDate() + (6 - endDow));

    const totalDays = Math.round((gridEnd.getTime() - gridStart.getTime()) / 86400000) + 1;
    const weeks = totalDays / DAYS;

    const cols: { date: Date; iso: string; count: number; inYear: boolean }[][] = [];
    let sum = 0;
    for (let w = 0; w < weeks; w++) {
      const col: { date: Date; iso: string; count: number; inYear: boolean }[] = [];
      for (let d = 0; d < DAYS; d++) {
        const cur = new Date(gridStart);
        cur.setDate(gridStart.getDate() + w * DAYS + d);
        const iso = toISODate(cur);
        const inYear = cur.getFullYear() === year;
        const c = counts[iso] ?? 0;
        if (inYear) sum += c;
        col.push({ date: cur, iso, count: c, inYear });
      }
      cols.push(col);
    }

    const markers: { week: number; label: string }[] = [];
    let lastMonth = -1;
    cols.forEach((col, w) => {
      const firstInYear = col.find((c) => c.inYear);
      if (!firstInYear) return;
      const m = firstInYear.date.getMonth();
      if (m !== lastMonth) {
        markers.push({ week: w, label: MONTH_LABELS[m] });
        lastMonth = m;
      }
    });

    return { grid: cols, monthMarkers: markers, yearTotal: sum };
  }, [counts, year]);

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
          {yearTotal.toLocaleString()} visits in {year}
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Less</span>
          {LEVEL_CLASSES.map((cls, i) => (
            <span key={i} className={`h-3 w-3 rounded-sm ${cls}`} aria-hidden />
          ))}
          <span>More</span>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Heatmap */}
        <div className="flex-1 overflow-x-auto">
          <div className="inline-flex flex-col gap-1 min-w-full">
            {/* Month labels */}
            <div className="flex gap-1 pl-8 h-4">
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

              {grid.map((col, w) => (
                <div key={w} className="flex flex-col gap-1">
                  {col.map((cell, d) => {
                    const hidden = !cell.inYear || isFuture(cell.date);
                    const level = hidden ? 0 : getLevel(cell.count);
                    return (
                      <div
                        key={d}
                        className={`h-3 w-3 rounded-sm ${hidden ? "bg-transparent" : LEVEL_CLASSES[level]} transition-colors`}
                        title={hidden ? "" : `${cell.count} visit${cell.count === 1 ? "" : "s"} on ${cell.iso}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Year selector */}
        <div className="flex flex-col gap-2 shrink-0">
          {AVAILABLE_YEARS.map((y) => {
            const active = y === year;
            return (
              <button
                key={y}
                type="button"
                onClick={() => setYear(y)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {y}
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
