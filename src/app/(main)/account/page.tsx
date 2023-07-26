import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const supabase = createServerComponentClient({ cookies });
  const user = (await supabase.auth.getSession()).data.session?.user;

  if (!user) redirect("/login");

  return <div className="w-full max-w-sm">Account: {user?.email}</div>;
}
