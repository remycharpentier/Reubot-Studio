import { useState } from "react";
import { StyledGames } from "../../components/styles/Games.styled";
import games from "../../constants/games";
import { Col, Row } from "react-bootstrap";

export default function Games() {
  const [selectedGame, setSelectedGame] = useState(null);

  const display = (game) => {
    setSelectedGame(game);
    console.log(game);
  };

  return (
    <>
      <StyledGames>
        <br />
        <h1>Page Jeux</h1>
        <br />
        <div className="cards-box">
          {games.map((item) => (
            <button
              key={item.id}
              className="box box-4"
              data-text={item.title}
              onClick={() => display(item)}
            >
              <img src={item.img} alt="" />
            </button>
          ))}
        </div>
        <br />
        <br />
        <p>
          {selectedGame && (
            <>
              <Row className="row-description">
                <Col className="selected-game-info" xs={3}>
                  <h3>Description</h3>
                  <br />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <strong>Titre</strong>
                    <span>{selectedGame.title}</span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <strong>Genre</strong>
                    <span>{selectedGame.genre}</span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <strong>Mode</strong>
                    <span>{selectedGame.mode}</span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <strong>Support</strong>
                    <span>{selectedGame.support}</span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <strong>Prix</strong>
                    <span>{selectedGame.price}</span>
                  </div>
                  <br />
                  <span>{selectedGame.resume}</span>
                </Col>
                <Col className="selected-game-img" xs={8}>
                  <img src={selectedGame.img} alt="" />
                </Col>
              </Row>
              <br />
            </>
          )}
        </p>
      </StyledGames>
    </>
  );
}
