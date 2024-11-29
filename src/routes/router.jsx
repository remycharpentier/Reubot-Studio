import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/User/Home";
import Games from "../pages/User/Games";
import News from "../pages/User/News";
import AboutUs from "../pages/User/AboutUs";
import Contact from "../pages/User/Contact";
import PageError from "../pages/User/PageError";

const generateRoutes = (Root) => [
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      { path: "/", element: <Navigate to="/home" replace /> },
      { path: "/home", element: <Home /> },
      { path: "/games", element: <Games /> },
      { path: "/news", element: <News /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <Navigate to="/home" replace /> },
    ],
  },
];

const createRouter = (Root) => createBrowserRouter(generateRoutes(Root));

export default createRouter;
