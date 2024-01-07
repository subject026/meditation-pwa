import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-200 flex items-center justify-center flex-col gap-12">
      <main className="grow">{children}</main>
      <nav className="fixed bottom-0">
        <Link
          className="px-4 py-2 rounded bg-red-600 font-bold text-neutral-300"
          to="/"
        >
          home
        </Link>
        <Link
          className="px-4 py-2 rounded bg-red-600 font-bold text-neutral-300"
          to="/session"
        >
          session
        </Link>
      </nav>
    </div>
  );
}
