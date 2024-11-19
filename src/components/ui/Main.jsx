import { StyledMain } from "../styles/Main.styled";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//IMG
import front_game1 from "../../assets/img/front_game1.jpg";

export default function Main() {
  return (
    <>
      <StyledMain>
        <Container id="main-container">
          <h1>Bienvenue !</h1>
          <p>
            Bienvenue chez Reubot Studio, un studio de développement de jeux
            vidéo basé à Bordeaux. Notre équipe passionnée allie créativité et
            technologie pour créer des expériences de jeu uniques et immersives.
            <br />
            <br />
            Nous croyons que chaque jeu est une œuvre d'art, et nous nous
            engageons à raconter des histoires captivantes à travers des
            mécaniques de jeu engageantes et des visuels époustouflants.
            Actuellement, nous développons notre premier titre, un jeu
            d'aventure narratif qui promet de redéfinir le genre.
            <br />
            <br />
            Rejoignez-nous dans cette aventure passionnante et suivez nos
            actualités sur les réseaux sociaux. Ensemble, donnons vie à des
            histoires inoubliables !
            <br />
            <br />
            Reubot Studio – L'imaginaire à portée de main.
          </p>
          <br />
          <hr />
          <br />
          <Card>
            <Card.Img
              variant="top"
              src={front_game1}
              className="front-game-img"
            />
            <Card.Body>
              <Card.Title>Titre Jeu Video 1</Card.Title>
              <Card.Text>
                En ligne
                <br />
                Solo
                <br />
                Aventure
                <br />
                Monde ouvert
                <br />
                <span className="price">59.99€</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </StyledMain>
    </>
  );
}
