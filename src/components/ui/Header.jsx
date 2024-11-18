import NavBar from "./NavBar";
import { StyledHeader } from "../styles/Header.styled";

import logo from "../../assets/img/logo.jpeg";
import { Col, Container, Row } from "@bootstrap-styled/v4";

const title = "Reubot Studio";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Container>
          <Row>
            <Col md="2" className="logo-titre">
              <a href="#">
                <img src={logo} alt="" />
              </a>
              <h2>{title}</h2>
            </Col>
            <Col col md="10" className="nav-bar">
              <NavBar></NavBar>
            </Col>
          </Row>
        </Container>
      </StyledHeader>
    </>
  );
}
