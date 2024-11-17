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
              <img src={logo} alt="" style={{ borderRadius: 10, width: 150 }} />
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
