// import { Route, Routes } from "react-router-dom";
import Home from "../../pages/User/Home";
import { StyledMain } from "../styles/Main.styled";
import Container from "react-bootstrap/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/games",
    element: "Page Jeux",
  },
  {
    path: "/news",
    element: "Page Actualités",
  },
  {
    path: "/about-us",
    element: "Page A propos",
  },
  {
    path: "/contact",
    element: "Page Contact",
  },
]);

export default function Main() {
  return (
    <>
      <StyledMain>
        <Container id="main-container">
          <RouterProvider router={router} />
        </Container>
      </StyledMain>
    </>
  );
}
