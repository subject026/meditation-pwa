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

import "./index.css";
import { PWATesting } from "./routes/pwa-testing";

const rootRoute = new RootRoute({
  component: () => <Outlet />,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Index />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
