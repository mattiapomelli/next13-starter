"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginData {
  username: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <div className="w-full max-w-sm">
      <h1 className="mb-4 text-center text-3xl font-bold">Login</h1>
      <form className="flex w-full flex-col gap-3" onSubmit={onSubmit}>
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
