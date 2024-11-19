import styled from "styled-components";
import hero from "../../assets/img/game10.jpg";

export const StyledMain = styled.div`
  min-height: 63vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${hero});
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed; */
  background-size: cover;
  background-position: 100% 76%;
  #main-container {
    padding: 50px;
    color: #f2f2f2;
  }
  .card {
    padding: 0;
    width: 15rem;
    color: #f2f2f2;
    background: rgba(255, 255, 255, 0.22);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  .front-game-img {
    width: cover;
  }
  button {
    display: flex;
    justify-self: end;
  }
  .price {
    display: flex;
    justify-self: end;
    font-weight: bold;
  }
`;
