import { useState } from "react";
import { StyledGames } from "../../components/styles/Games.styled";
import games from "../../constants/Games";
import { Col, Row } from "react-bootstrap";
import SwiperGallery from "../../components/ui/SwiperGallery";

import { useRef } from "react";

export default function Games() {
  const [selectedGame, setSelectedGame] = useState(null);
  const cardsRef = useRef(null);

  const display = (game) => {
    setSelectedGame(game);
  };

  const scrollLeft = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <>
      <StyledGames>
        <h1>Nos Jeux vidéo</h1>
        {/* Liste des jeux */}
        <div className="games-list">
          <button className="scroll-button scroll-left" onClick={scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="cards-box" ref={cardsRef}>
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
          <button className="scroll-button scroll-right" onClick={scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <hr />
        {/* Jeu selectionné */}
        <div className="selected-game-box">
          {selectedGame && (
            <Row className="row-description">
              <Col className="selected-game-info" xl={3} md={8} xs={3}>
                <h3>Description</h3>
                <br />
                <div className="infos-box">
                  <strong>Titre</strong>
                  <span>{selectedGame.title}</span>
                </div>
                <div className="infos-box">
                  <strong>Genre</strong>
                  <span>{selectedGame.genre}</span>
                </div>
                <div className="infos-box">
                  <strong>Mode</strong>
                  <span>{selectedGame.mode}</span>
                </div>
                <div className="infos-box">
                  <strong>Support</strong>
                  <span>{selectedGame.support}</span>
                </div>
                <div className="infos-box">
                  <strong>Prix</strong>
                  <span>{selectedGame.price}</span>
                </div>
                <br />
                <span>{selectedGame.resume}</span>
              </Col>
              <Col xl={3} md={4} xs={3} className="cover-box">
                <img
                  src={selectedGame.cover}
                  alt=""
                  className="selected-game-cover"
                />
              </Col>
              <Col xl={6} md={12} xs={6} className="description-images">
                <div className="swiper-box">
                  <SwiperGallery selectedGame={selectedGame} />
                </div>
              </Col>
            </Row>
          )}
        </div>
      </StyledGames>
    </>
  );
}
