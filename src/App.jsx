import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/ui/Header";
import Main from "./components/ui/Main";
import Footer from "./components/ui/Footer";
import { StyledBody } from "./components/styles/Body.styled";
import { StyledGlobal } from "./components/styles/Global.styled";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/User/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "games",
        element: "Page Jeux",
      },
      {
        path: "news",
        element: "Page Actualités",
      },
      {
        path: "about-us",
        element: "Page A propos",
      },
      {
        path: "contact",
        element: "Page Contact",
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
