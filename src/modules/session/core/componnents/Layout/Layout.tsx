import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-orange-400 flex items-center justify-center flex-col gap-12">
      {children}
    </div>
  );
}
