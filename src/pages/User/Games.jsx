import { useState } from "react";
import { StyledGames } from "../../components/styles/Games.styled";
import games from "../../constants/games";
import { Col, Row } from "react-bootstrap";
import SwiperGallery from "../../components/ui/SwiperGallery";

export default function Games() {
  const [selectedGame, setSelectedGame] = useState(null);

  const display = (game) => {
    setSelectedGame(game);
    // console.log(game);
  };

  return (
    <>
      <StyledGames>
        <br />
        <h1>Nos Jeux vidéo</h1>
        <br />
        <div className="cards-box">
          {games.map((item) => (
            <button
              key={item.id}
              className="box box-4"
              data-text={item.title}
              onClick={() => display(item)}
            >
              <img src={item.cover} alt="" />
            </button>
          ))}
        </div>
        <br />
        <hr />
        <br />
        <div>
          {selectedGame && (
            <>
              <Row className="row-description">
                <Col className="selected-game-info" xs={3}>
                  <h3>Description</h3>
                  <br />
                  <div className="flex-space-between">
                    <strong>Titre</strong>
                    <span>{selectedGame.title}</span>
                  </div>
                  <div className="flex-space-between">
                    <strong>Genre</strong>
                    <span>{selectedGame.genre}</span>
                  </div>
                  <div className="flex-space-between">
                    <strong>Mode</strong>
                    <span>{selectedGame.mode}</span>
                  </div>
                  <div className="flex-space-between">
                    <strong>Support</strong>
                    <span>{selectedGame.support}</span>
                  </div>
                  <div className="flex-space-between">
                    <strong>Prix</strong>
                    <span>{selectedGame.price}</span>
                  </div>
                  <br />
                  <span>{selectedGame.resume}</span>
                </Col>
                <Col xs={9} className="description-images">
                  <img
                    src={selectedGame.cover}
                    alt=""
                    className="selected-game-cover"
                  />
                  <div className="swiper-box">
                    <SwiperGallery selectedGame={selectedGame} />
                  </div>
                </Col>
              </Row>
              <br />
            </>
          )}
        </div>
      </StyledGames>
    </>
  );
}
