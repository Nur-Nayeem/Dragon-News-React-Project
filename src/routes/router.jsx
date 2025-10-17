import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Auth</h2>,
  },
  {
    path: "/news",
    element: <h2>News</h2>,
  },
  {
    path: "*",
    element: <h2>Error 404</h2>,
  },
]);
export default router;
