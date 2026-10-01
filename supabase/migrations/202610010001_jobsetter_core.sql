-- JobSetter core backend
-- Step 1: staff auth, clients, rules, contacts, opportunities, queues and usage.

create extension if not exists pgcrypto;

do $$ begin
  create type public.staff_role as enum ('admin','manager','setter');
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.client_status as enum ('onboarding','active','paused','cancelled');
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.opportunity_type as enum ('new_enquiry','open_quote','reactivation');
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.opportunity_status as enum (
    'new','queued','attempting','contacted','qualified','booked','quoted','won','lost','dead','do_not_contact'
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.task_type as enum ('call','callback','follow_up','reactivation','review');
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.task_status as enum ('pending','in_progress','completed','cancelled');
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.activity_channel as enum ('call','sms','email','system','note');
exception when duplicate_object then null; end $$;

do $$ begin
  create type public.activity_direction as enum ('inbound','outbound','internal');
exception when duplicate_object then null; end $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role public.staff_role not null default 'setter',
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.plans (
  key text primary key,
  name text not null,
  monthly_price_cents integer not null check (monthly_price_cents >= 0),
  new_enquiry_allowance integer not null check (new_enquiry_allowance >= 0),
  quote_allowance integer not null check (quote_allowance >= 0),
  reactivation_allowance integer not null check (reactivation_allowance >= 0),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

insert into public.plans (
  key,name,monthly_price_cents,new_enquiry_allowance,quote_allowance,reactivation_allowance
)
values
  ('starter','Starter',100000,10,10,10),
  ('core','Core',249000,35,25,50),
  ('growth','Growth',449000,60,50,100)
on conflict (key) do update set
  name = excluded.name,
  monthly_price_cents = excluded.monthly_price_cents,
  new_enquiry_allowance = excluded.new_enquiry_allowance,
  quote_allowance = excluded.quote_allowance,
  reactivation_allowance = excluded.reactivation_allowance,
  updated_at = now();

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  trading_name text,
  slug text not null unique,
  plan_key text references public.plans(key),
  status public.client_status not null default 'onboarding',
  timezone text not null default 'Australia/Brisbane',
  primary_contact_name text,
  primary_contact_email text,
  primary_contact_phone text,
  booking_url text,
  service_area jsonb not null default '{}'::jsonb,
  business_hours jsonb not null default '{}'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.client_rules (
  client_id uuid primary key references public.clients(id) on delete cascade,
  qualification_rules jsonb not null default '{}'::jsonb,
  allowed_answers jsonb not null default '{}'::jsonb,
  escalation_rules jsonb not null default '{}'::jsonb,
  contact_attempt_limits jsonb not null default '{}'::jsonb,
  quote_follow_up_cadence jsonb not null default '{}'::jsonb,
  reactivation_rules jsonb not null default '{}'::jsonb,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lead_sources (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  name text not null,
  source_type text not null,
  external_key text,
  active boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (client_id, source_type, external_key)
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  first_name text,
  last_name text,
  phone text,
  email text,
  address_line text,
  suburb text,
  state text,
  postcode text,
  do_not_contact boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.opportunities (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  source_id uuid references public.lead_sources(id) on delete set null,
  type public.opportunity_type not null,
  status public.opportunity_status not null default 'new',
  source_external_id text,
  source_label text,
  description text,
  priority smallint not null default 50 check (priority between 1 and 100),
  estimated_value numeric(12,2),
  received_at timestamptz not null default now(),
  first_contact_at timestamptz,
  last_contact_at timestamptz,
  next_action_at timestamptz,
  quote_sent_at timestamptz,
  won_at timestamptz,
  lost_at timestamptz,
  owner_id uuid references public.profiles(id) on delete set null,
  outcome_reason text,
  counts_toward_allowance boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (client_id, source_external_id)
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  opportunity_id uuid not null references public.opportunities(id) on delete cascade,
  assigned_to uuid references public.profiles(id) on delete set null,
  type public.task_type not null default 'call',
  status public.task_status not null default 'pending',
  priority smallint not null default 50 check (priority between 1 and 100),
  due_at timestamptz not null default now(),
  started_at timestamptz,
  completed_at timestamptz,
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.activities (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  opportunity_id uuid references public.opportunities(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  staff_id uuid references public.profiles(id) on delete set null,
  channel public.activity_channel not null,
  direction public.activity_direction not null default 'outbound',
  outcome text,
  notes text,
  duration_seconds integer check (duration_seconds is null or duration_seconds >= 0),
  external_id text,
  occurred_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.monthly_usage (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  month date not null,
  new_enquiries integer not null default 0 check (new_enquiries >= 0),
  open_quotes integer not null default 0 check (open_quotes >= 0),
  reactivations integer not null default 0 check (reactivations >= 0),
  updated_at timestamptz not null default now(),
  unique (client_id, month)
);

create index if not exists opportunities_queue_idx
  on public.opportunities (status, type, next_action_at, received_at, priority desc);

create index if not exists opportunities_client_idx
  on public.opportunities (client_id, received_at desc);

create index if not exists tasks_queue_idx
  on public.tasks (status, due_at, priority desc);

create index if not exists tasks_assignee_idx
  on public.tasks (assigned_to, status, due_at);

create index if not exists activities_opportunity_idx
  on public.activities (opportunity_id, occurred_at desc);

create index if not exists contacts_client_phone_idx
  on public.contacts (client_id, phone);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

do $$ begin
  create trigger profiles_set_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger plans_set_updated_at before update on public.plans
  for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger clients_set_updated_at before update on public.clients
  for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger client_rules_set_updated_at before update on public.client_rules
  for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger lead_sources_set_updated_at before update on public.lead_sources
  for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger contacts_set_updated_at before update on public.contacts
  for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger opportunities_set_updated_at before update on public.opportunities
  for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger tasks_set_updated_at before update on public.tasks
  for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

create or replace function public.is_active_staff()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and active = true
  );
$$;

grant execute on function public.is_active_staff() to authenticated;

alter table public.profiles enable row level security;
alter table public.plans enable row level security;
alter table public.clients enable row level security;
alter table public.client_rules enable row level security;
alter table public.lead_sources enable row level security;
alter table public.contacts enable row level security;
alter table public.opportunities enable row level security;
alter table public.tasks enable row level security;
alter table public.activities enable row level security;
alter table public.monthly_usage enable row level security;

drop policy if exists "staff read own profile" on public.profiles;
create policy "staff read own profile"
on public.profiles for select
to authenticated
using (id = auth.uid() or public.is_active_staff());

drop policy if exists "active staff read plans" on public.plans;
create policy "active staff read plans"
on public.plans for select
to authenticated
using (public.is_active_staff());

drop policy if exists "active staff manage clients" on public.clients;
create policy "active staff manage clients"
on public.clients for all
to authenticated
using (public.is_active_staff())
with check (public.is_active_staff());

drop policy if exists "active staff manage client rules" on public.client_rules;
create policy "active staff manage client rules"
on public.client_rules for all
to authenticated
using (public.is_active_staff())
with check (public.is_active_staff());

drop policy if exists "active staff manage lead sources" on public.lead_sources;
create policy "active staff manage lead sources"
on public.lead_sources for all
to authenticated
using (public.is_active_staff())
with check (public.is_active_staff());

drop policy if exists "active staff manage contacts" on public.contacts;
create policy "active staff manage contacts"
on public.contacts for all
to authenticated
using (public.is_active_staff())
with check (public.is_active_staff());

drop policy if exists "active staff manage opportunities" on public.opportunities;
create policy "active staff manage opportunities"
on public.opportunities for all
to authenticated
using (public.is_active_staff())
with check (public.is_active_staff());

drop policy if exists "active staff manage tasks" on public.tasks;
create policy "active staff manage tasks"
on public.tasks for all
to authenticated
using (public.is_active_staff())
with check (public.is_active_staff());

drop policy if exists "active staff manage activities" on public.activities;
create policy "active staff manage activities"
on public.activities for all
to authenticated
using (public.is_active_staff())
with check (public.is_active_staff());

drop policy if exists "active staff manage usage" on public.monthly_usage;
create policy "active staff manage usage"
on public.monthly_usage for all
to authenticated
using (public.is_active_staff())
with check (public.is_active_staff());

create or replace view public.call_queue
with (security_invoker = true)
as
select
  t.id as task_id,
  t.type as task_type,
  t.status as task_status,
  t.priority as task_priority,
  t.due_at,
  t.assigned_to,
  o.id as opportunity_id,
  o.type as opportunity_type,
  o.status as opportunity_status,
  o.received_at,
  o.next_action_at,
  o.estimated_value,
  o.description,
  c.id as contact_id,
  trim(concat_ws(' ', c.first_name, c.last_name)) as contact_name,
  c.phone,
  c.email,
  cl.id as client_id,
  coalesce(cl.trading_name, cl.name) as client_name,
  cl.timezone,
  case
    when o.type = 'new_enquiry' and o.first_contact_at is null then 1
    when t.type = 'callback' then 2
    else 3
  end as queue_group
from public.tasks t
join public.opportunities o on o.id = t.opportunity_id
join public.clients cl on cl.id = o.client_id
left join public.contacts c on c.id = o.contact_id
where t.status = 'pending'
  and cl.status = 'active'
  and (c.do_not_contact is false or c.id is null);

grant select on public.call_queue to authenticated;
