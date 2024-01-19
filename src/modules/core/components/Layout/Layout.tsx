import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-200 flex flex-col gap-12">
      <main className="grow">{children}</main>
      <nav className="fixed bottom-0 flex gap-4  py-4">
        <Link
          className="px-4 py-2 rounded bg-neutral-900 font-bold text-neutral-300"
          to="/"
        >
          home
        </Link>
        <Link
          className="px-4 py-2 rounded bg-neutral-900 font-bold text-neutral-300"
          to="/focus"
        >
          focus
        </Link>
        <Link
          className="px-4 py-2 rounded bg-neutral-900 font-bold text-neutral-300"
          to="/session"
        >
          session
        </Link>
        <Link
          className="px-4 py-2 rounded bg-neutral-900 font-bold text-neutral-300"
          to="/pwa-testing"
        >
          pwa testing
        </Link>
      </nav>
    </div>
  );
}
