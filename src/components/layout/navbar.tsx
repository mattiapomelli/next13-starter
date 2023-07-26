import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

import { UserMenu } from "../user-menu";

import { Container } from "./container";

export const Navbar = async () => {
  const supabase = createServerComponentClient({ cookies });
  const user = (await supabase.auth.getSession()).data.session?.user;

  return (
    <header className="flex h-20 items-center">
      <Container className="flex w-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {user ? (
            <UserMenu user={user} />
          ) : (
            <Link href="/signup">
              <Button>Get started</Button>
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};
