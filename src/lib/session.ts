import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function getCurrentUser() {
  const supabase = createServerComponentClient({ cookies });
  const res = await supabase.auth.getSession();
  return res.data.session?.user;
}
