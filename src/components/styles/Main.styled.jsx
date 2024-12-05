import styled from "styled-components";
import bg4 from "../../assets/img/background/bg4.png";

export const StyledMain = styled.div`
  position: relative;
  min-height: 81vh;
  background: rgba(0, 0, 0, 0.5);
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
