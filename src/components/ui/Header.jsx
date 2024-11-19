import NavBar from "./NavBar";
import { StyledHeader } from "../styles/Header.styled";

//IMG
import logo from "../../assets/img/logo.jpeg";
import brush from "../../assets/img/brush.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const companyName = "Reubot Studio";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Container>
          <Row>
            <Col className="logo-titre">
              <a href="#">
                <img src={logo} alt="" className="logo-img" />
              </a>
              <h1 className="company-name">{companyName}</h1>
              <img src={brush} alt="" className="brush-img" />
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
