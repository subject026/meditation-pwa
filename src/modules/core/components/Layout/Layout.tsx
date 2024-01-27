import { ReactNode } from "react";
import { Header } from "../Header/Header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-200 flex flex-col gap-12">
      <Header />
      <main className="grow">{children}</main>
    </div>
  );
}
