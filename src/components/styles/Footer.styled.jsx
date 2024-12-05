import styled from "styled-components";

export const StyledFooter = styled.div`
  position: relative;

  #row-footer {
    margin-top: 16px;
  }

  span,
  p {
    font-weight: bold;
  }

  #footer-logo {
    border-radius: 10px;
    width: 167px;
    margin-top: 5px;
  }

  .company-text {
    position: absolute;
    bottom: -22px;
    left: 78px;
    a,
    span {
      position: relative;
      top: 5px;
    }
  }

  #footer-company-name {
    font-size: 25px;
    position: relative;
    z-index: 1;
  }

  .company-container {
    position: relative;
  }

  .brush-img {
    position: absolute;
    top: -62px;
    left: -105px;
    z-index: -1;
    width: 410px;
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
