import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { StyledBody } from "./components/styles/Body.styled";
import { StyledGlobal } from "./components/styles/Global.styled";
import Header from "./components/ui/Header";
import Main from "./components/ui/Main";
import Footer from "./components/ui/Footer";
import createRouter from "./routes/router";

const Root = () => (
  <>
    <StyledGlobal />
    <StyledBody>
      <Header />
      <Main />
      <Footer />
    </StyledBody>
  </>
);

const router = createRouter(Root);

const App = () => <RouterProvider router={router} />;

export default App;
