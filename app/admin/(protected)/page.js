import { createClient } from "../../../lib/supabase/server";

async function getCount(query) {
  const { count, error } = await query;
  if (error) return null;
  return count ?? 0;
}

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const now = new Date().toISOString();

  const [activeClients, newOpportunities, dueTasks] = await Promise.all([
    getCount(supabase.from("clients").select("*", { count: "exact", head: true }).eq("status", "active")),
    getCount(supabase.from("opportunities").select("*", { count: "exact", head: true }).eq("status", "new")),
    getCount(supabase.from("tasks").select("*", { count: "exact", head: true }).eq("status", "pending").lte("due_at", now)),
  ]);

  const backendReady = [activeClients, newOpportunities, dueTasks].every((value) => value !== null);

  return (
    <>
      <header className="adminPageHeader">
        <div>
          <small>JOBSETTER OPERATIONS</small>
          <h1>Dashboard</h1>
          <p>The internal system that will feed work to the calling team.</p>
        </div>
        <div className={backendReady ? "backendStatus ready" : "backendStatus"}>
          <span />
          {backendReady ? "Database connected" : "Database setup required"}
        </div>
      </header>

      <section className="adminStatGrid">
        <article><small>ACTIVE CLIENTS</small><strong>{activeClients ?? "—"}</strong><span>Currently live</span></article>
        <article><small>NEW ENQUIRIES</small><strong>{newOpportunities ?? "—"}</strong><span>Waiting for first action</span></article>
        <article><small>DUE TASKS</small><strong>{dueTasks ?? "—"}</strong><span>Calls and callbacks due now</span></article>
      </section>

      <section className="adminSetupCard">
        <small>STEP 1</small>
        <h2>Core backend foundation</h2>
        <div className="adminChecklist">
          <span>✓ Staff authentication</span>
          <span>✓ Client records</span>
          <span>✓ Client rules</span>
          <span>✓ Contacts</span>
          <span>✓ Opportunities</span>
          <span>✓ Tasks and callbacks</span>
          <span>✓ Activity history</span>
          <span>✓ Plan allowances</span>
        </div>
        <p>Next: connect lead sources and build the live Call Now queue.</p>
      </section>
    </>
  );
}
