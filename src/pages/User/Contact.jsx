import { Button, Col, Form, Row } from "react-bootstrap";
import { StyledContact } from "../../components/styles/Contact.styled";
import { useState } from "react";

import correct from "../../assets/img/form/correct.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    lastName: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState(""); // État pour le message de retour

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);
    // Envoyer la data en console, front ou back
    // Ici dans la console

    // Simule un envoi de données
    const isSuccess = true;

    if (isSuccess) {
      setFeedbackMessage("Merci ! Votre message a été envoyé avec succès !");
    } else {
      setFeedbackMessage(
        "Une erreur s'est produite lors de l'envoi de votre message."
      );
    }
    // Réinitialise le form si nécessaire
    setFormData({
      lastName: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <>
      <StyledContact>
        <h1>Nous contacter</h1>
        <Row>
          <Col>
            <Form className="form" onSubmit={handleSubmit}>
              <Form.Group
                className="custom-label"
                controlId="formBasiclastName"
              >
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="custom-label" controlId="formBasicName">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="custom-label" controlId="formBasicEmail">
                <Form.Label>eMail</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="custom-label" controlId="formBasicPhone">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="custom-label" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Envoyer
              </Button>
            </Form>
            {feedbackMessage && (
              <span className="feebackMessage">
                <img src={correct} alt="" className="correct" />
                {feedbackMessage}
              </span>
            )}
          </Col>
          <Col>
            <h3>Informations</h3>
            <p>
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
              eMail
              <br />
              remycha@msn.com
              <br />
              <br />{" "}
            </p>
            <h3 className="wip">
              ⚒ A faire : Rendre les champs obligatoires avec des feedback
              messages
            </h3>
          </Col>
        </Row>
      </StyledContact>
    </>
  );
}
