import game1 from "../../assets/img/front_game1.jpg";
import game2 from "../../assets/img/front_game2.jpeg";
import game3 from "../../assets/img/front_game3.jpg";
import game4 from "../../assets/img/front_game4.jpg";

const imgGame1 = <img src={game1} alt="" />;
const imgGame2 = <img src={game2} alt="" />;
const imgGame3 = <img src={game3} alt="" />;
const imgGame4 = <img src={game4} alt="" />;

export default function Game() {
  const games = [
    {
      id: 1,
      titre: "titreGame1",
      img: imgGame1,
    },
    {
      id: 2,
      titre: "titreGame2",
      img: imgGame2,
    },
    {
      id: 3,
      titre: "titreGame3",
      img: imgGame3,
    },
    {
      id: 4,
      titre: "titreGame4",
      img: imgGame4,
    },
  ];

  return (
    <>
      <ul>
        {games.map((item) => (
          <li key={item.id}>
            <a href="#">{item.id}</a>
            <br />
            <a href="#">{item.titre}</a>
            <br />
            ***
            <br />
            {item.img}
            <br />
            ***
          </li>
        ))}
      </ul>
    </>
  );
}
