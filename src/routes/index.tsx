import { Layout } from "@/modules/core/components/Layout/Layout";
import { Link } from "@tanstack/react-router";

export function Index() {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-purple-800">Heyy :)</h1>
      <Link to="/session">New Session</Link>
    </Layout>
  );
}
