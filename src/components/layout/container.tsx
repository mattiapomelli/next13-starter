import { clsx } from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={clsx("mx-auto max-w-6xl px-4 sm:px-6", className)}>{children}</div>;
};
