import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import NotFound from "./pages/NotFound.tsx";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./pages/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
