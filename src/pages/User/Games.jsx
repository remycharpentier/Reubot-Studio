import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Slider from "../../components/ui/Slider";
import { StyledGames } from "../../components/styles/Games.styled";
import games from "../../constants/Games";

export default function Games() {
  const location = useLocation();
  const [selectedGame, setSelectedGame] = useState(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (location.state?.selectedGameId) {
      const game = games.find((g) => g.id === location.state.selectedGameId);
      setSelectedGame(game);
    }
  }, [location.state]);

  const display = (game) => setSelectedGame(game);

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
      {selectedGame && (
        <Row className="selected-game-box">
          {/* Description */}
          <Col className="description-col" xl={3} md={8} sm={12}>
            <h3>Description</h3>
            <div className="infos-box">
              <strong>Titre:</strong> <span>{selectedGame.title}</span>
            </div>
            <div className="infos-box">
              <strong>Genre:</strong> <span>{selectedGame.genre}</span>
            </div>
            <div className="infos-box">
              <strong>Mode:</strong> <span>{selectedGame.mode}</span>
            </div>
            <div className="infos-box">
              <strong>Support:</strong> <span>{selectedGame.support}</span>
            </div>
            <div className="infos-box">
              <strong>Prix:</strong> <span>{selectedGame.price}</span>
            </div>
            <p>{selectedGame.resume}</p>
          </Col>
          {/* Cover */}
          <Col xl={3} md={4} sm={12} className="cover-col">
            <img
              src={selectedGame.cover}
              alt={selectedGame.title}
              className="selected-game-cover"
            />
          </Col>
          {/* Slider */}
          <Col xl={6} md={12} sm={12} className="slider-col">
            <Slider footage={selectedGame.footage} />{" "}
          </Col>
        </Row>
      )}
    </StyledGames>
  );
}
