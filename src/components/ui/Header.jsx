import NavBar from "./NavBar";
import { StyledHeader } from "../styles/Header.styled";

//IMG
import logo from "../../assets/img/logo.jpeg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const title = "Reubot Studio";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Container>
          <Row>
            <Col className="logo-titre">
              <a href="#">
                <img src={logo} alt="" />
              </a>
              <h2>{title}</h2>
            </Col>
            <Col className="nav-bar">
              <NavBar></NavBar>
            </Col>
          </Row>
        </Container>
      </StyledHeader>
    </>
  );
}
