-- Optional database foundation for the next iteration.
-- Keep public learning content separate from private user progress.
create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  summary text not null,
  body jsonb not null default '[]'::jsonb,
  estimated_minutes int not null check (estimated_minutes between 1 and 20),
  source_url text not null,
  published boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.lessons enable row level security;
create policy "Published lessons are readable by everyone"
on public.lessons for select using (published = true);

create table if not exists public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_slug text not null,
  completed_at timestamptz not null default now(),
  unique(user_id, lesson_slug)
);
alter table public.user_progress enable row level security;
create policy "Users can read their own progress"
on public.user_progress for select using (auth.uid() = user_id);
create policy "Users can add their own progress"
on public.user_progress for insert with check (auth.uid() = user_id);
