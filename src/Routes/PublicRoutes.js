import BlogDetails from "../pages/BlogDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
    meta: {
      publicRoutes: true,
    },
  },
  {
    path: "/blog/:id",
    element: <BlogDetails />,
    meta: {
      publicRoutes: true,
    },
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      publicRoutes: true,
      layout: "empty",
    },
  },
  {
    path: "/sign-up",
    element: <Register />,
    meta: {
      publicRoutes: true,
      layout: "empty",
    },
  }
];

export default publicRoutes;
