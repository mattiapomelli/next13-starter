"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const signupSchema = z
  .object({
    email: z.string().email(),
    username: z.string().min(1, { message: "Required" }),
    password: z.string().min(1, { message: "Required" }),
    confirmPassword: z.string().min(1, { message: "Required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type SignupData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <div className="w-full max-w-sm">
      <h1 className="mb-4 text-center text-3xl font-bold">Signup</h1>
      <form className="flex w-full flex-col gap-3" onSubmit={onSubmit}>
        <Input label="Email" type="text" {...register("email")} error={errors.email?.message} />
        <Input
          label="Username"
          type="text"
          {...register("username")}
          error={errors.username?.message}
        />
        <Input
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />
        <Input
          label="Confirm Password"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <Button className="mt-2">Sign up</Button>
        <p className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
