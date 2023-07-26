"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { VariantProps, cva } from "class-variance-authority";
import { clsx } from "clsx";
import { ComponentPropsWithoutRef, ElementRef, ReactElement, forwardRef } from "react";
import * as React from "react";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = forwardRef<
  ElementRef<typeof ToastPrimitives.Viewport>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={clsx(
      "fixed z-[100] max-h-screen p-4",
      "w-full md:max-w-[420px]",
      "flex flex-col-reverse gap-4 sm:flex-col",
      "top-0 sm:bottom-0 sm:right-0 sm:top-auto",
      className,
    )}
    {...props}
  />
));

ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  [
    "group relative",
    "w-full p-6 pr-8",
    "rounded-md border shadow-lg",
    "flex items-center justify-between gap-4",
    "pointer-events-auto overflow-hidden",
    "transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  ],
  {
    variants: {
      variant: {
        default: "border bg-base-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = forwardRef<
  ElementRef<typeof ToastPrimitives.Root>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={clsx(toastVariants({ variant }), className)}
      {...props}
    />
  );
});

Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = ToastPrimitives.Action;

ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = forwardRef<
  ElementRef<typeof ToastPrimitives.Close>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={clsx(
      "absolute right-2 top-2",
      "rounded-md p-1",
      "text-base-content-neutral hover:text-base-content",
      "opacity-0 transition-opacity group-hover:opacity-100",
      "focus:opacity-100 focus:outline-none focus:ring-2",
      className,
    )}
    toast-close=""
    {...props}
  >
    <XMarkIcon className="h-4 w-4" />
  </ToastPrimitives.Close>
));

ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = forwardRef<
  ElementRef<typeof ToastPrimitives.Title>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={clsx("text-sm font-bold", className)} {...props} />
));

ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = forwardRef<
  ElementRef<typeof ToastPrimitives.Description>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={clsx("text-sm text-base-content-neutral", className)}
    {...props}
  />
));

ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
