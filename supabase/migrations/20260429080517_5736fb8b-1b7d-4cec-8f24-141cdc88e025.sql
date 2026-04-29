-- Create daily visitor stats table for heatmap
CREATE TABLE public.visitor_daily_stats (
  visit_date DATE PRIMARY KEY,
  count BIGINT NOT NULL DEFAULT 0
);

ALTER TABLE public.visitor_daily_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read daily visitor stats"
ON public.visitor_daily_stats FOR SELECT
USING (true);

-- Update increment function to also bump today's daily count
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_count BIGINT;
BEGIN
  UPDATE public.visitor_stats
  SET count = count + 1
  WHERE id = 1
  RETURNING count INTO new_count;

  INSERT INTO public.visitor_daily_stats (visit_date, count)
  VALUES (CURRENT_DATE, 1)
  ON CONFLICT (visit_date)
  DO UPDATE SET count = public.visitor_daily_stats.count + 1;

  RETURN new_count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_visitor_count() TO anon, authenticated;