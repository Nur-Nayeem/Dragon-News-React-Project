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
        loader: () => fetch("/news.json"),
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
    path: "/about",
    element: <h2>about</h2>,
  },
  {
    path: "/career",
    element: <h2>Career</h2>,
  },
  {
    path: "*",
    element: <h2>Error 404</h2>,
  },
]);
export default router;
