import { Container } from "@bootstrap-styled/v4";
import { StyledMain } from "../styles/Main.styled";
// import hero from "../../assets/img/game10.jpg";

// const title = "Reubot Studio";

export default function Main() {
  return (
    <>
      <StyledMain>
        {/* <img src={hero} alt="" id="hero-img" /> */}
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
        </Container>
      </StyledMain>
    </>
  );
}
