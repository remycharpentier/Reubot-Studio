import styled from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
  z-index: 1;
  .logo-img {
    margin-top: 16px;
    border-radius: 10px;
    width: 88px;
  }
  .brush-img {
    width: 500px;
    position: absolute;
    left: 71px;
    top: 94px;
    z-index: -1;
  }
  h2 {
    margin-top: 0;
    margin-bottom: 13px;
  }
  .nav-bar {
    display: flex;
    flex-flow: column-reverse;
  }
`;
