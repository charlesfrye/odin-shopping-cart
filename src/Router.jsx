import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./components/Home";
import Shop from "./components/Shop";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=30");
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home />, errorElement: <ErrorPage /> },
        {
          path: "shop",
          element: <Shop />,
          errorElement: <ErrorPage />,
          loader: fetchProducts,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
