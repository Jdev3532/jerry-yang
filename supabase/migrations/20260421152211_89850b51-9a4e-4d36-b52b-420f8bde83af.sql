
CREATE TABLE public.visitor_stats (
  id INTEGER PRIMARY KEY,
  count BIGINT NOT NULL DEFAULT 0
);

INSERT INTO public.visitor_stats (id, count) VALUES (1, 0);

ALTER TABLE public.visitor_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read visitor count"
ON public.visitor_stats FOR SELECT
USING (true);

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
  RETURN new_count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_visitor_count() TO anon, authenticated;
