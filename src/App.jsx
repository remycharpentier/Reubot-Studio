import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider } from "react-router-dom";
import { StyledGlobal } from "./components/styles/Global.styled";
import Header from "./components/ui/Header";
import Main from "./components/ui/Main";
import Footer from "./components/ui/Footer";
import createRouter from "./routes/router";
import { useTheme, ThemeProvider } from "./context/ThemeContext";

const Root = () => {
  return (
    <ThemeProvider>
      <InnerRoot />
    </ThemeProvider>
  );
};

const InnerRoot = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <StyledGlobal isDarkMode={isDarkMode} />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

const router = createRouter(Root);

const App = () => <RouterProvider router={router} />;

export default App;
