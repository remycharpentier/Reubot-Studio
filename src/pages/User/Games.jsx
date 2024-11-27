import game1 from "../../assets/img/front_game1.jpg";
import game2 from "../../assets/img/front_game2.jpeg";
import game3 from "../../assets/img/front_game3.jpg";
import game4 from "../../assets/img/front_game4.jpg";
import { StyledGames } from "../../components/styles/Games.styled";

const games = [
  {
    id: 1,
    titre: "Kunitsu-Gami: Path of the Godess",
    img: game1,
    genre: "Action / Aventure",
    mode: "Solo",
    support: "PC, PlayStation 5, Xbox Series X/S",
    price: 59.99,
  },
  {
    id: 2,
    titre: "Monster Hunter Stories 2 : Wings of ruin",
    img: game2,
    genre: "RPG (Jeu de rôle) / Tour par tour",
    mode: "Solo et multijoueur",
    support: "Nintendo Switch, PC",
    price: 19.99,
  },
  {
    id: 3,
    titre: "Street Fighter 6",
    img: game3,
    genre: "Jeu de combat",
    mode: "Solo et multijoueur",
    support: "PlayStation 4, PlayStation 5, Xbox Series X/S, PC",
    price: 39.99,
  },
  {
    id: 4,
    titre: "Devil May Cry 5",
    img: game4,
    genre: "Action / Hack and Slash",
    mode: "Solo",
    support: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, PC",
    price: 29.99,
  },
];

export default function Games() {
  return (
    <>
      <StyledGames>
        <br />
        <h1>Page Jeux</h1>
        <h3 className="wip">⚒ A faire : liste de jeux et leur description</h3>
        <br />
        <div className="cards-box">
          {games.map((item) => (
            <div key={item.id} className="box box-4" data-text={item.titre}>
              <img src={item.img} alt="" />
            </div>
          ))}
          {games.map((item) => (
            <div key={item.id} className="box box-4" data-text={item.titre}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </StyledGames>
    </>
  );
}
