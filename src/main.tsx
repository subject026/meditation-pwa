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

const routeTree = rootRoute.addChildren([indexRoute, sessionRoute]);

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
