import { Button, Col, Form, Row } from "react-bootstrap";
import { StyledContact } from "../../components/styles/Contact.styled";

export default function Contact() {
  return (
    <>
      <StyledContact>
        <br />
        <h1>Nous contacter</h1>
        <Row>
          <Col>
            <Form className="form">
              <Form.Group className="mb-3" controlId="formBasicFamilyName">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="familyName" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse eMail</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control type="phone" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control type="message" rows={5} as="textarea" />
              </Form.Group>
              <br />
              <Button variant="success" type="submit">
                Envoyer
              </Button>
            </Form>
          </Col>
          <Col>
            <p>
              <h3>Informations</h3>
              Vous avez des questions ou autres demandes ?
              <br />
              N'hésitez pas à nous contacter. Notre équipe en charge vous
              répondra dans les plus brefs délais.
              <br />
              <br />
              Téléphone
              <br />
              0617394541
              <br />
              <br />
              Ouverture
              <br />
              Lundi : 9h00 - 18h00
              <br />
              Mardi : 9h00 - 18h00
              <br />
              Mercredi : 9h00 - 18h00
              <br />
              Jeudi : 9h00 - 18h00
              <br />
              Vendredi : 9h00 - 12h00
              <br />
              Samedi : Indisponible
              <br />
              Dimanche : Indisponible
              <br />
              <br />
              Mail
              <br />
              remycha@msn.com
            </p>
          </Col>
        </Row>
        <br />
      </StyledContact>
    </>
  );
}
