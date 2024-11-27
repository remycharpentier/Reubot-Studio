// IMG
import logo from "../../assets/img/logo.jpeg";
import location from "../../assets/img/location_logo.png";
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
              <a
                href="https://www.canva.com/design/DAGWcQ7DDOY/gRMK4gLjBKwGr9lV2gcDsw/view?utm_content=DAGWcQ7DDOY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo} alt="" id="footer-logo" />
              </a>
              <br />
              <span>
                Copyright © 2024
                <br />
                <a
                  href="https://www.canva.com/design/DAGWcQ7DDOY/gRMK4gLjBKwGr9lV2gcDsw/view?utm_content=DAGWcQ7DDOY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-name"
                  id="footer-company-name"
                >
                  {companyName}
                </a>
                <img src={brush} alt="" className="brush-img" />
                <br />
                Video Games Development
              </span>
            </Col>
            <Col className="adresse">
              <h3>Adresse</h3>
              <a
                href="https://www.google.fr/maps/place/45+Rue+Thiac,+33000+Bordeaux/@44.8437562,-0.58706,16z/data=!3m1!4b1!4m6!3m5!1s0xd5527e7258f8609:0x6f2ebbf2e4ca2a2a!8m2!3d44.8437524!4d-0.5844851!16s%2Fg%2F11c0zpx9tj?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={location} alt="" />
              </a>
              <br />
              <span id="adresse-texte">45 rue Thiac 33000 Bordeaux</span>
            </Col>
            <Col>
              <div id="div-reseaux">
                <h3>Réseaux</h3>
                <a
                  href="https://www.linkedin.com/in/rémy-charpentier-a0ba4717a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="" />
                </a>
                <a
                  href="https://github.com/remycharpentier"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={git} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/reubot.boy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="" />
                </a>

                <img src={twitter} alt="" />
              </div>
            </Col>
            <Col className="translate">
              <h3>Translate</h3>
              <Flag></Flag>
            </Col>
          </Row>
          <br />
          <hr />
        </Container>
      </StyledFooter>
    </>
  );
}
