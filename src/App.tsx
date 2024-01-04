import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./routes/Root";
import { Session } from "./routes/Session";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/session",
    element: <Session />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
