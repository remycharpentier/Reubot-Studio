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
`;
