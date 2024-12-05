import { Card, Col, Row } from "react-bootstrap";
import games from "../../constants/Games";
import { StyledNewGames } from "../styles/NewGames.styled";

export default function NewGames() {
  return (
    <StyledNewGames>
      <div className="game-list">
        {games.slice(0, 4).map((item) => (
          <div key={item.id} className="game-item">
            <Card>
              <Card.Img variant="top" src={item.cover} />
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
          </div>
        ))}
      </div>
    </StyledNewGames>
  );
}
