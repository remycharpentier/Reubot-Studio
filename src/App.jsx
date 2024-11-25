import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/ui/Header";
import Main from "./components/ui/Main";
import Footer from "./components/ui/Footer";
import { StyledBody } from "./components/styles/Body.styled";
import { StyledGlobal } from "./components/styles/Global.styled";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/User/Home";
import Games from "./pages/User/Games";
import News from "./pages/User/News";
import AboutUs from "./pages/User/AboutUs";
import Contact from "./pages/User/Contact";
import PageError from "./pages/User/PageError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <StyledGlobal />
      <StyledBody>
        <Header />
        <Main />
        <Footer />
      </StyledBody>
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
