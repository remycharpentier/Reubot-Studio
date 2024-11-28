import styled from "styled-components";

export const StyledMain = styled.div`
  position: relative;
  min-height: 81vh;
  background: rgba(0, 0, 0, 0.5);
  background-image: url(/src/assets/img/background/bg1.jpg),
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.88) 35%,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 1) 60%,
      rgba(0, 0, 0, 0.98) 61%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(/src/assets/img/background/bg2.jpg);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: 139%, 100% 200px, 139%;
  background-position-x: right, center, left;
  background-position-y: 0, 1410px, 1488px;
  background-blend-mode: multiply;
  color: #f2f2f2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0 2px 10px #000;
  #main-container {
    padding: 16px 12px;
  }
`;
