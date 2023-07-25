"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Required" }),
});

type LoginData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <div className="w-full max-w-sm">
      <h1 className="mb-4 text-center text-3xl font-bold">Login</h1>
      <form className="flex w-full flex-col gap-3" onSubmit={onSubmit}>
        <Input label="Username" type="text" {...register("email")} error={errors.email?.message} />
        <Input
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />
        <Button className="mt-2">Log in</Button>
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
