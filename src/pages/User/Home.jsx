import { StyledCarousel } from "../../components/styles/Carousel.styled";
import { StyledHome } from "../../components/styles/Home.styled";
import Carousel from "../../components/ui/Carousel";

export default function Home() {
  return (
    <>
      <StyledHome>
        <br />
        <article>
          <h1>Bienvenue !</h1>
          <p>
            Reubot Studio, un studio de développement de jeux vidéo basé à
            Bordeaux. Notre équipe passionnée allie créativité et technologie
            pour créer des expériences de jeu uniques et immersives.
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
        </article>
        <br />
        <div className="titre-ligne">
          <h3>Nos derniers jeux vidéo</h3>
        </div>
        <br />
        <hr />
        <br />
        <StyledCarousel>
          <Carousel></Carousel>
        </StyledCarousel>
        <br />
      </StyledHome>
    </>
  );
}
