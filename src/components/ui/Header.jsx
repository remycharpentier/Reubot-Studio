import NavBar from "./NavBar";
import { StyledHeader } from "../styles/Header.styled";

//IMG
import logo from "../../assets/img/logo.jpeg";
import brush from "../../assets/img/brush.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";

const companyName = "Reubot Studio";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Container>
          <Row>
            <Col className="logo-titre">
              <a
                href="https://www.canva.com/design/DAGWcQ7DDOY/gRMK4gLjBKwGr9lV2gcDsw/view?utm_content=DAGWcQ7DDOY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo} alt="" className="logo-img" />
                <h1 className="company-name">{companyName}</h1>
              </a>
              <img src={brush} alt="" className="brush-img" />
            </Col>
            <Col className="nav-bar">
              <span className="wip">
                <strong>
                  ⚒ A faire : les features admin & changement de thème
                </strong>
              </span>
              <Form>
                <Form.Group
                  controlId="custom-switch"
                  className="groupe-switch admin"
                >
                  <Form.Label className="me-2">Mode admin</Form.Label>
                  <Form.Check type="switch" id="custom-switch" />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="custom-switch" className="groupe-switch">
                  <Form.Label className="me-2">Mode clair / sombre</Form.Label>
                  <Form.Check type="switch" id="custom-switch" />
                </Form.Group>
              </Form>
              <NavBar></NavBar>
            </Col>
          </Row>
        </Container>
      </StyledHeader>
    </>
  );
}
