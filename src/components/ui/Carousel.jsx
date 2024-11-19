import { Card } from "react-bootstrap";
import imgGame1 from "../../assets/img/front_game1.jpg";
import imgGame2 from "../../assets/img/front_game2.jpeg";
import imgGame3 from "../../assets/img/front_game3.jpg";
import imgGame4 from "../../assets/img/front_game4.jpg";

const games = [
  {
    id: 1,
    titre: "Kunitsu-Gami: Path of the Godess",
    img: imgGame1,
    price: 59.99,
  },
  {
    id: 2,
    titre: "Kunitsu-Gami: Path of the Godess",
    img: imgGame2,
    price: 19.99,
  },
  {
    id: 3,
    titre: "Street Fighter 6",
    img: imgGame3,
    price: 39.99,
  },
  {
    id: 4,
    titre: "Devil May Cry 5",
    img: imgGame4,
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
              <Card.Body>
                <Card.Title>{item.titre}</Card.Title>
                <Card.Text>
                  En ligne
                  <br />
                  Solo
                  <br />
                  Aventure
                  <br />
                  Monde ouvert
                  <span className="price">{item.price}€</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
