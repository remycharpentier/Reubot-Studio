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
          <h1>Titre</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla id,
            odio dolores iusto nobis soluta reiciendis facilis consequuntur, ut
            laudantium explicabo consequatur omnis iste molestias sunt vel
            eligendi voluptatem expedita.
          </p>
        </Container>
      </StyledMain>
    </>
  );
}
