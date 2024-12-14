import styled from "styled-components";
import bg1 from "../../assets/img/background/bg1.jpg";

export const StyledMain = styled.div`
  position: relative;
  background-attachment: fixed;
  background-image: url(${bg1});
  background-size: 139%;
  color: #f2f2f2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0 2px 10px #000;
  background-position-x: right;
  transition: background-size 1.5s ease, background-position 1.5s ease;
  /* Assombrit mon bg */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  #main-container {
    position: relative;
    padding-block: 50px;
  }
  /* Responsive */
  @media (max-width: 1057px) {
    background-size: cover;
    background-position-x: center;
  }
  @media (max-width: 576px) {
    .titre-ligne h1::before,
    .titre-ligne h1::after,
    .titre-ligne h2::before,
    .titre-ligne h2::after {
      width: 0 !important;
    }
  }
`;
