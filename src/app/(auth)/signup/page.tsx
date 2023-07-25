"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SignupData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<SignupData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <div className="w-full max-w-sm">
      <h1 className="mb-4 text-center text-3xl font-bold">Signup</h1>
      <form className="flex w-full flex-col gap-3" onSubmit={onSubmit}>
        <Input
          label="Email"
          type="email"
          {...register("email", { required: "Email is required" })}
          error={errors.email?.message}
        />
        <Input
          label="Username"
          type="text"
          {...register("username", { required: "Name is required" })}
          error={errors.username?.message}
        />
        <Input
          label="Password"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={errors.password?.message}
        />
        <Input
          label="Confirm Password"
          type="password"
          {...register("confirmPassword", {
            required: "Password is required",
            validate: (value) => value === getValues("password") || "Passwords do not match",
          })}
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
