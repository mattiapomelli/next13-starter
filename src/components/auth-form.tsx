"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const authSchema = z.object({
  email: z.string().email(),
});

type AuthData = z.infer<typeof authSchema>;

export const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthData>({
    resolver: zodResolver(authSchema),
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
    <form className="flex w-full flex-col gap-3" onSubmit={onSubmit}>
      <Input label="Email" type="text" {...register("email")} error={errors.email?.message} />
      <Button className="mt-2" loading={isLoading} disabled={isLoading}>
        Sign in
      </Button>
    </form>
  );
};
