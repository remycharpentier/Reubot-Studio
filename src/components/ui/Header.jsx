import PropTypes from "prop-types";
import NavBar from "./NavBar";
import { Container, Row, Col, Form } from "react-bootstrap";
import { StyledHeader } from "../styles/Header.styled";
import brush from "../../assets/img/logo/brush.png";
import logo2 from "../../assets/img/logo/logo2.png";

const companyName = "Reubot Studio";

export default function Header({ toggleTheme, isDarkMode }) {
  return (
    <StyledHeader isDarkMode={isDarkMode}>
      <Container>
        <Row className="row">
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
                className="groupe-switch"
                style={{ visibility: "hidden" }}
              >
                <Form.Label className="me-2">Admin</Form.Label>
                <Form.Check type="switch" />
              </Form.Group>
              <Form.Group controlId="theme-mode" className="groupe-switch">
                <Form.Label className="me-2">Thème</Form.Label>
                <Form.Check type="switch" onChange={toggleTheme} />
              </Form.Group>
            </Form>
            <NavBar />
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
}

// Validation des props
Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
