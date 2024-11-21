import Main from "./components/ui/Main";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import { StyledBody } from "./components/styles/Body.styled";
import { StyledGlobal } from "./components/styles/Global.styled";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Page Home
        <br />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/games">Jeux</NavLink>
          <NavLink to="/news">Actualités</NavLink>
          <NavLink to="/about-us">A Propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    ),
  },
  {
    path: "/games",
    element: (
      <div>
        Page Jeux
        <br />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/games">Jeux</NavLink>
          <NavLink to="/news">Actualités</NavLink>
          <NavLink to="/about-us">A Propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    ),
  },
  {
    path: "/news",
    element: (
      <div>
        Page Actualités
        <br />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/games">Jeux</NavLink>
          <NavLink to="/news">Actualités</NavLink>
          <NavLink to="/about-us">A Propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    ),
  },
  {
    path: "/about-us",
    element: (
      <div>
        Page A propos
        <br />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/games">Jeux</NavLink>
          <NavLink to="/news">Actualités</NavLink>
          <NavLink to="/about-us">A Propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        Page Contact
        <br />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/games">Jeux</NavLink>
          <NavLink to="/news">Actualités</NavLink>
          <NavLink to="/about-us">A Propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <StyledGlobal />
      <StyledBody>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </StyledBody>
    </>
  );
}

export default App;
