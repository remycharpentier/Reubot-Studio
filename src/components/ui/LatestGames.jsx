import { Card, Col, Row } from "react-bootstrap";
import games from "../../constants/Games";
import { StyledLatestGames } from "../styles/LatestGames.styled";
import { useNavigate } from "react-router-dom"; // Importation de useNavigate

export default function LatestGames() {
  const navigate = useNavigate(); // Initialisation de useNavigate

  // Fonction pour gérer le clic sur un jeu
  const handleGameClick = (gameId) => {
    // Redirection vers la page des jeux avec l'ID du jeu sélectionné
    navigate(`/games`, { state: { selectedGameId: gameId } });
  };

  return (
    <StyledLatestGames>
      <div className="game-list">
        {games.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="game-item"
            onClick={() => handleGameClick(item.id)}
          >
            {/* Ajout de l'événement onClick */}
            <Card className="card">
              <Card.Img variant="top" src={item.cover} />
              <Card.Body className="card-body">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="card-text">
                  <Row>
                    <Col xs={12} md={5}>
                      <strong>Genre</strong>
                    </Col>
                    <Col xs={12} md={7}>
                      {item.genre}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={5}>
                      <strong>Mode de jeu</strong>
                    </Col>
                    <Col xs={12} md={7}>
                      {item.mode}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={5}>
                      <strong>Plateforme</strong>
                    </Col>
                    <Col xs={12} md={7}>
                      {item.support}
                    </Col>
                  </Row>
                </Card.Text>
                <span className="price">{item.price}€</span>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </StyledLatestGames>
  );
}
