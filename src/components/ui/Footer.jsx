import logo2 from "../../assets/img/logo/logo2.png";
import location from "../../assets/img/footer/location_logo.png";
import linkedin from "../../assets/img/footer/linkedin.png";
import git from "../../assets/img/footer/git.png";
import facebook from "../../assets/img/footer/facebook.png";
import twitter from "../../assets/img/footer/twitter.png";
import brush from "../../assets/img/logo/brush.png";
import Flag from "./Flag";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { StyledFooter } from "../styles/Footer.styled";

const nomEntreprise = "Reubot Studio";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Row id="row-footer">
          <Col>
            <a
              href="https://www.canva.com/design/DAGWcQ7DDOY/gRMK4gLjBKwGr9lV2gcDsw/view?utm_content=DAGWcQ7DDOY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo2} alt="Logo de l'entreprise" id="footer-logo" />
            </a>
            <br />
            <div className="company-container">
              <div className="company-text">
                <a
                  href="https://www.canva.com/design/DAGWcQ7DDOY/gRMK4gLjBKwGr9lV2gcDsw/view?utm_content=DAGWcQ7DDOY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-name"
                  id="footer-company-name"
                >
                  {nomEntreprise}
                </a>
                <span> &copy; 2024</span>
                <p>Développement de jeux vidéo</p>
              </div>
              <img src={brush} alt="Pinceau" className="brush-img" />
            </div>
            <br />
          </Col>
          <Col className="adresse">
            <h3>Adresse</h3>
            <a
              href="https://www.google.fr/maps/place/45+Rue+Thiac,+33000+Bordeaux/@44.8437562,-0.58706,16z/data=!3m1!4b1!4m6!3m5!1s0xd5527e7258f8609:0x6f2ebbf2e4ca2a2a!8m2!3d44.8437524!4d-0.5844851!16s%2Fg%2F11c0zpx9tj?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={location} alt="Localisation" />
            </a>
            <br />
            <span id="adresse-texte">45 rue Thiac, 33000 Bordeaux</span>
          </Col>
          <Col>
            <h3>Réseaux sociaux</h3>
            <div id="div-reseaux">
              <a
                href="https://www.linkedin.com/in/rémy-charpentier-a0ba4717a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/remycharpentier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={git} alt="GitHub" />
              </a>
              <a
                href="https://www.facebook.com/reubot.boy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter" />
              </a>
            </div>
          </Col>
          <Col className="translate">
            <h3>Traduire</h3>
            <Flag />
          </Col>
        </Row>
        <hr />
      </Container>
    </StyledFooter>
  );
}
