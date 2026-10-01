import { redirect } from "next/navigation";
import { createClient } from "../../../../lib/supabase/server";
import { signIn } from "../../actions";
import "../../admin.css";

export const metadata = {
  title: "Staff Login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({ searchParams }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect("/admin");

  const params = await searchParams;
  const error = params?.error ? decodeURIComponent(params.error) : "";

  return (
    <main className="adminLoginPage">
      <div className="adminLoginCard">
        <img src="/jobsetterlogo.png" alt="JobSetter" />
        <small>STAFF OPERATIONS</small>
        <h1>Sign in.</h1>
        <p>Internal access for the JobSetter team.</p>
        <form action={signIn}>
          <label>
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            <span>Password</span>
            <input name="password" type="password" autoComplete="current-password" required />
          </label>
          {error && <div className="adminError">{error}</div>}
          <button className="adminPrimaryButton" type="submit">Sign in →</button>
        </form>
      </div>
    </main>
  );
}
