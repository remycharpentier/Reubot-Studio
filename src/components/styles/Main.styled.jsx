import styled from "styled-components";
import bg1 from "../../assets/img/background/bg1.jpg";
import bg2 from "../../assets/img/background/bg2.jpg";
import bg3 from "../../assets/img/background/bg3.png";
import bg4 from "../../assets/img/background/bg4.png";

export const StyledMain = styled.div`
  position: relative;
  min-height: 81vh;
  background: rgba(0, 0, 0, 0.5);
  /*
  background-image: url(${bg1}),
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.88) 35%,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 1) 60%,
      rgba(0, 0, 0, 0.98) 61%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${bg2}), url(${bg1}),
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.88) 35%,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 1) 60%,
      rgba(0, 0, 0, 0.98) 61%,
      rgba(0, 0, 0, 0) 100%
    );
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: 139%, 100% 200px, 139%, 139%, 100% 200px;
  background-position-x: right, center, left, right, center;
  background-position-y: 0, 150vh, 162vh, 323vh, 311vh;
  background-blend-mode: multiply;
  */
  background-image: url(${bg4});
  background-position-x: right;
  background-size: 139%;
  background-blend-mode: multiply;
  color: #f2f2f2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0 2px 10px #000;
  #main-container {
    padding: 16px 12px;
  }
`;
