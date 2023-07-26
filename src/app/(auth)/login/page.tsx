"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  email: z.string().email(),
});

type LoginData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const supabase = createClientComponentClient();

  const onSubmit = handleSubmit(async ({ email }) => {
    setIsLoading(true);
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "http://localhost:3000/api/auth/callback",
      },
    });

    setIsLoading(false);
  });

  return (
    <div className="w-full max-w-sm">
      <h1 className="mb-4 text-center text-3xl font-bold">Login</h1>
      <form className="flex w-full flex-col gap-3" onSubmit={onSubmit}>
        <Input label="Email" type="text" {...register("email")} error={errors.email?.message} />
        <Button className="mt-2" loading={isLoading} disabled={isLoading}>
          Log in
        </Button>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
