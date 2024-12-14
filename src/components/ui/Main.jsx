import { Outlet } from "react-router-dom";
import { StyledMain } from "../styles/Main.styled";
import { Container } from "react-bootstrap";

export default function Main() {
  return (
    <>
      <StyledMain>
        <Container id="main-container">
          <Outlet />
        </Container>
      </StyledMain>
    </>
  );
}
