import { Col, Container, Row } from "@bootstrap-styled/v4";
import logo from "../../assets/img/logo.jpeg";
import location from "../../assets/img/location.png";
import linkedin from "../../assets/img/linkedin.png";
import git from "../../assets/img/git.png";
import facebook from "../../assets/img/facebook.png";
import Flag from "./Flag";
import { StyledFooter } from "../styles/Footer.styled";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Container>
          <Row>
            <Col>
              <img src={logo} alt="" id="footer-logo" />
              <br />
              <span>
                Copyright © 2024
                <br />
                Reubot Studio
                <br />
                Video Games Development
              </span>
            </Col>
            <Col>
              <h3>Adresse</h3>
              <img src={location} alt="" style={{ width: 60 }} />
              <br />
              <span id="adresse-texte">45 rue Thiac 33000 Bordeaux</span>
            </Col>
            <Col>
              <div id="div-reseaux">
                <h3>Réseaux</h3>
                <img src={linkedin} alt="" />
                <img src={git} alt="" />
                <img src={facebook} alt="" />
              </div>
            </Col>
            <Col>
              <h3>Translate</h3>
              <Flag></Flag>
            </Col>
          </Row>
        </Container>
      </StyledFooter>
    </>
  );
}
