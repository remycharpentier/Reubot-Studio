import { Card, Col, Row } from "react-bootstrap";
import imgGame1 from "../../assets/img/front_game1.jpg";
import imgGame2 from "../../assets/img/front_game2.jpeg";
import imgGame3 from "../../assets/img/front_game3.jpg";
import imgGame4 from "../../assets/img/front_game4.jpg";

const games = [
  {
    id: 1,
    titre: "Kunitsu-Gami: Path of the Godess",
    img: imgGame1,
    genre: "Action / Aventure",
    mode: "Solo",
    support: "PC, PlayStation 5, Xbox Series X/S",
    price: 59.99,
  },
  {
    id: 2,
    titre: "Monster Hunter Stories 2 : Wings of ruin",
    img: imgGame2,
    genre: "RPG (Jeu de rôle) / Tour par tour",
    mode: "Solo et multijoueur",
    support: "Nintendo Switch, PC",
    price: 19.99,
  },
  {
    id: 3,
    titre: "Street Fighter 6",
    img: imgGame3,
    genre: "Jeu de combat",
    mode: "Solo et multijoueur",
    support: "PlayStation 4, PlayStation 5, Xbox Series X/S, PC",
    price: 39.99,
  },
  {
    id: 4,
    titre: "Devil May Cry 5",
    img: imgGame4,
    genre: "Action / Hack and Slash",
    mode: "Solo",
    support: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, PC",
    price: 29.99,
  },
];

export default function Carousel() {
  return (
    <>
      <ul>
        {games.map((item) => (
          <li key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.img} />
              <Card.Body className="card-body">
                <Card.Title>{item.titre}</Card.Title>
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
