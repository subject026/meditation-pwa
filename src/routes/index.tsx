import { Link } from "@tanstack/react-router";

export function Index() {
  return (
    <div className="min-h-screen bg-orange-400 flex items-center justify-center flex-col gap-12">
      <h1 className="font-bold text-4xl text-purple-800">Heyy :)</h1>
      <Link to="/session">New Session</Link>
    </div>
  );
}
