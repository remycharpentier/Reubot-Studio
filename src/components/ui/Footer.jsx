// IMG
import logo from "../../assets/img/logo.jpeg";
import location from "../../assets/img/location.png";
import linkedin from "../../assets/img/linkedin.png";
import git from "../../assets/img/git.png";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import brush from "../../assets/img/brush.png";

// COMP
import Flag from "./Flag";
import { StyledFooter } from "../styles/Footer.styled";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const companyName = "Reubot Studio";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Container>
          <Row id="row-footer">
            <Col>
              <img src={logo} alt="" id="footer-logo" />
              <br />
              <span>
                Copyright © 2024
                <br />
                <span className="company-name" id="footer-company-name">
                  {companyName}
                </span>
                <img src={brush} alt="" className="brush-img" />
                <br />
                Video Games Development
              </span>
            </Col>
            <Col className="adresse">
              <h3>Adresse</h3>
              <a href="#">
                <img src={location} alt="" />
              </a>
              <br />
              <span id="adresse-texte">45 rue Thiac 33000 Bordeaux</span>
            </Col>
            <Col>
              <div id="div-reseaux">
                <h3>Réseaux</h3>
                <img src={linkedin} alt="" />
                <img src={git} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
              </div>
            </Col>
            <Col className="translate">
              <h3>Translate</h3>
              <Flag></Flag>
            </Col>
          </Row>
        </Container>
      </StyledFooter>
    </>
  );
}
