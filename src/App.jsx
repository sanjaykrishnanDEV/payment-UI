import { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChargeBee from "./pages/chargebee.jsx";
import PaddlePoc from "./pages/paddle.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PaddlePoc />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
