import { Card, Col, Row } from "react-bootstrap";
import games from "../../constants/games";

export default function Carousel() {
  return (
    <>
      <ul>
        {games.map((item) => (
          <li key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.img} />
              <Card.Body className="card-body">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="card-text">
                  <Row>
                    <Col lg={5} className="test">
                      <strong>Genre</strong>
                    </Col>
                    <Col lg={7}>{item.genre}</Col>
                  </Row>
                  <Row>
                    <Col lg={5}>
                      <strong>Mode de jeu</strong>
                    </Col>
                    <Col lg={7}>{item.mode}</Col>
                  </Row>
                  <Row>
                    <Col lg={5}>
                      <strong>Plateforme</strong>
                    </Col>
                    <Col lg={7}>{item.support}</Col>
                  </Row>
                </Card.Text>
                <span className="price">{item.price}€</span>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
