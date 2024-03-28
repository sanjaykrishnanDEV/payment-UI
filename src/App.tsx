import { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChargeBee from "./pages/chargebee";
import PaddlePoc from "./pages/paddle";
function App() {
  const router = createBrowserRouter([
    {
      path: "/charge-bee",
      element: <ChargeBee />,
    },
    {
      path: "/paddle",
      element: <PaddlePoc />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
