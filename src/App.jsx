import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider } from "react-router-dom";
import { StyledGlobal } from "./components/styles/Global.styled";
import Header from "./components/ui/Header";
import Main from "./components/ui/Main";
import Footer from "./components/ui/Footer";
import createRouter from "./routes/router";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useState } from "react";
import { lightTheme, darkTheme } from "../src/components/styles/Theme";

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {/* Normalisation des styles CSS */}
      <CssBaseline />
      <StyledGlobal isDarkMode={isDarkMode} />
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Main isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
};

const router = createRouter(Root);

const App = () => <RouterProvider router={router} />;

export default App;
