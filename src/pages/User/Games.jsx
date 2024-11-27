import { StyledGames } from "../../components/styles/Games.styled";
import games from "../../constants/games";

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
