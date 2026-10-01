import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { signOut } from "../actions";
import "../admin.css";

export const metadata = {
  title: "Operations",
  robots: { index: false, follow: false },
};

export default async function ProtectedAdminLayout({ children }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role, active")
    .eq("id", user.id)
    .maybeSingle();

  if (profile && profile.active === false) {
    await supabase.auth.signOut();
    redirect("/admin/login?error=Your%20staff%20account%20is%20inactive.");
  }

  return (
    <div className="adminShell">
      <aside className="adminSidebar">
        <a className="adminBrand" href="/admin">
          <img src="/jobsetterlogo.png" alt="JobSetter" />
        </a>
        <nav>
          <a className="isActive" href="/admin">Dashboard</a>
          <span>Call Queue <em>next</em></span>
          <span>Clients <em>next</em></span>
          <span>Opportunities <em>next</em></span>
          <span>Reports <em>next</em></span>
        </nav>
        <div className="adminUser">
          <b>{profile?.full_name || user.email}</b>
          <span>{profile?.role || "staff"}</span>
          <form action={signOut}><button type="submit">Sign out</button></form>
        </div>
      </aside>
      <main className="adminMain">{children}</main>
    </div>
  );
}
