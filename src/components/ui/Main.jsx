import Home from "../../pages/User/Home";
import { StyledMain } from "../styles/Main.styled";
import Container from "react-bootstrap/Container";

export default function Main() {
  return (
    <>
      <StyledMain>
        <Container id="main-container">
          <Home></Home>
        </Container>
      </StyledMain>
    </>
  );
}
