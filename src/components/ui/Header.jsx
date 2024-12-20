import NavBar from "./NavBar";
import { Container, Row, Col, Form } from "react-bootstrap";
import { StyledHeader } from "../styles/Header.styled";
import brush from "../../assets/img/logo/brush.png";
import logo2 from "../../assets/img/logo/logo2.png";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const companyName = "Reubot Studio";

export default function Header() {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <StyledHeader isDarkMode={isDarkMode}>
      <Container>
        <Row>
          <Col className="logo-box">
            <Link to="/home">
              <img src={logo2} alt="Logo" className="logo-img" />
              <h1 className="company-name">{companyName}</h1>
              <img src={brush} alt="Brush" className="brush-img" />
            </Link>
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
