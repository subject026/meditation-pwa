import { ComponentPropsWithoutRef, ReactNode } from "react";

export function Button({
  children,
  ...props
}: ComponentPropsWithoutRef<"button"> & { children: ReactNode }) {
  return (
    <button
      className="px-4 py-2 rounded bg-red-600 font-bold text-neutral-300"
      {...props}
    >
      {children}
    </button>
  );
}
