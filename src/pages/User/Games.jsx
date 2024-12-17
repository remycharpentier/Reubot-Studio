import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { StyledGames } from "../../components/styles/Games.styled";
import games from "../../constants/Games";
import { Col, Row } from "react-bootstrap";
import SwiperGallery from "../../components/ui/SwiperGallery";

export default function Games() {
  const location = useLocation();
  const [selectedGame, setSelectedGame] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef(null);

  // Nombre de jeux à afficher à la fois
  const gamesToShow = 8;

  useEffect(() => {
    if (location.state && location.state.selectedGameId) {
      const game = games.find((g) => g.id === location.state.selectedGameId);
      setSelectedGame(game);
    }
  }, [location.state]);

  const display = (game) => {
    setSelectedGame(game);
  };

  const scrollLeft = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + games.length) % games.length
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  return (
    <>
      <StyledGames>
        <h1>Nos Jeux vidéo</h1>
        <div className="games-list">
          <button className="scroll-button scroll-left" onClick={scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="cards-box" ref={cardsRef}>
            {Array.from({ length: gamesToShow }).map((_, index) => {
              const gameIndex = (currentIndex + index) % games.length;
              const item = games[gameIndex];
              return (
                <button
                  key={item.id}
                  className="box box-4"
                  data-text={item.title}
                  onClick={() => display(item)}
                >
                  <img src={item.cover} alt="" />
                </button>
              );
            })}
          </div>
          <button className="scroll-button scroll-right" onClick={scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <hr />
        <div className="selected-game-box">
          {selectedGame && (
            <Row className="row-description">
              <Col className="selected-game-info" xl={3} md={8} sm={12}>
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
              <Col xl={3} md={4} sm={12} className="cover-box">
                <img
                  src={selectedGame.cover}
                  alt=""
                  className="selected-game-cover"
                />
              </Col>
              <Col xl={6} md={12} sm={12} className="description-images">
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
