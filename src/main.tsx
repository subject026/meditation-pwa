import React from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  Router,
  Route,
  RootRoute,
} from "@tanstack/react-router";

import { Index } from "@/routes/index.tsx";
import { Session } from "@/routes/session.tsx";
import { PWATesting } from "@/routes/pwa-testing";
import { Focus } from "@/routes/focus";

import { SessionProvider } from "@/modules/session/context/TimerContext/SessionContext";

import "./index.css";

const rootRoute = new RootRoute({
  component: () => <Outlet />,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Index />,
});

const focusRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/focus",
  component: () => <Focus />,
});

const sessionRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/session",
  component: () => <Session />,
});

const pwaTestingRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/pwa-testing",
  component: () => <PWATesting />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  focusRoute,
  sessionRoute,
  pwaTestingRoute,
]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  </React.StrictMode>
);
