import { Button, Col, Form, Row } from "react-bootstrap";
import { StyledContact } from "../../components/styles/Contact.styled";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import emailjs from "emailjs-com";
import correct from "../../assets/img/form/correct.png";

export default function Contact() {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    lastName: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    toName: "Remy",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Imports via var d'env
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer l'e-mail via EmailJS
    emailjs.send(serviceId, templateId, formData, userId).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFeedbackMessage("Merci ! Votre message a été envoyé avec succès !");
      },
      (err) => {
        console.error("FAILED...", err);
        setFeedbackMessage(
          "Une erreur s'est produite lors de l'envoi de votre message."
        );
      }
    );

    // Réinitialise le form si nécessaire
    setFormData({
      lastName: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      toName: "Remy",
    });
  };

  return (
    <>
      <StyledContact isDarkMode={isDarkMode}>
        <h1>Nous contacter</h1>
        <Row>
          <Col xl={6} lg={6} md={12} className="order-2 order-lg-1">
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
              <span className="feedbackMessage">
                <img src={correct} alt="" className="correct" />
                {feedbackMessage}
              </span>
            )}
          </Col>
          <Col xl={6} lg={6} md={12} className="order-1 order-lg-2">
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
            </p>
            <br />
          </Col>
        </Row>
      </StyledContact>
    </>
  );
}
