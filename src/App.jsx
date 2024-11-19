import Main from "./components/ui/Main";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import { StyledBody } from "./components/styles/Body.styled";
import { StyledGlobal } from "./components/styles/Global.styled";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
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
