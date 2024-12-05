import styled from "styled-components";

export const StyledFooter = styled.div`
  position: relative;
  #row-footer {
    margin-top: 16px;
  }
  span {
    font-weight: bold;
  }
  #footer-logo {
    border-radius: 10px;
    width: 136px;
    margin-top: 5px;
  }
  #footer-company-name {
    font-size: 25px;
  }
  .brush-img {
    position: absolute;
    top: 10.5vh;
    left: 18vh;
    z-index: -1;
    width: 400px;
  }
  #div-reseaux img {
    margin-right: 10px;
    width: 50px;
  }
  .adresse {
    img {
      width: 50px;
    }
  }
  .translate ul {
    display: flex;
  }
  .flag {
    width: 50px;
    margin-right: 3px;
  }
`;
