import { Navigation } from "./Navigation";
import { Permissions } from "./Permissions";

export function Header() {
  return (
    <header>
      <div className="max-w-6xl m-auto px-4 flex justify-between items-center py-4">
        <h1 className="text-4xl font-bold text-neutral-900">HabitCache</h1>
        <Navigation />
        <Permissions />
      </div>
    </header>
  );
}
