import { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChargeBee from "./pages/chargebee";
function App() {
  const router = createBrowserRouter([
    {
      path: "/charge-bee",
      element: <ChargeBee />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
