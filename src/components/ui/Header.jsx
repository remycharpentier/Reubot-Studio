import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import { StyledHeader } from "../styles/Header.styled";
import brush from "../../assets/img/logo/brush.png";
import logo2 from "../../assets/img/logo/logo2.png";

const companyName = "Reubot Studio";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Row>
          <Col className="logo-box">
            <a
              href="https://www.canva.com/design/DAGWcQ7DDOY/gRMK4gLjBKwGr9lV2gcDsw/view?utm_content=DAGWcQ7DDOY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo2} alt="Logo" className="logo-img" />
              <h1 className="company-name">{companyName}</h1>
            </a>
            <img src={brush} alt="Brush" className="brush-img" />
          </Col>
          <Col className="nav-bar">
            <Form>
              <Form.Group
                controlId="admin-mode"
                className="groupe-switch admin"
              >
                <Form.Label className="me-2">Mode admin</Form.Label>
                <Form.Check type="switch" />
              </Form.Group>
              <Form.Group controlId="theme-mode" className="groupe-switch">
                <Form.Label className="me-2">Mode clair / sombre</Form.Label>
                <Form.Check type="switch" />
              </Form.Group>
            </Form>
            <NavBar />
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
}
