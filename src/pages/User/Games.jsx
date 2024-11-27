import game1 from "../../assets/img/front_game1.jpg";
import game2 from "../../assets/img/front_game2.jpeg";
import game3 from "../../assets/img/front_game3.jpg";
import game4 from "../../assets/img/front_game4.jpg";
import { StyledGames } from "../../components/styles/Games.styled";

export default function Games() {
  return (
    <>
      <StyledGames>
        <br />
        <h1>Page Jeux</h1>
        <h3 className="wip">⚒ A faire : liste de jeux et leur description</h3>
        <br />
        <div className="cards-box">
          <img src={game1} alt="" className="box box-4" data-text="Game 1" />
          <img src={game2} alt="" className="box box-5" data-text="Game 2" />
          <img src={game3} alt="" className="box box-4" data-text="Game 3" />
          <img src={game4} alt="" className="box box-5" data-text="Game 4" />
          <img src={game1} alt="" className="box box-4" data-text="Game 1" />
          <img src={game2} alt="" className="box box-5" data-text="Game 2" />
          <img src={game3} alt="" className="box box-4" data-text="Game 3" />
          <img src={game4} alt="" className="box box-5" data-text="Game 4" />
        </div>
      </StyledGames>
    </>
  );
}
