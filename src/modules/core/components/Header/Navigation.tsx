import { Link } from "@tanstack/react-router";

export function Navigation() {
  return (
    <nav className="flex gap-4">
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
  );
}
