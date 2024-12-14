import styled from "styled-components";

export const StyledFooter = styled.div`
  position: relative;
  overflow: hidden;
  .col {
    margin-bottom: 30px;
  }

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
    filter: ${({ isDarkMode }) =>
      isDarkMode
        ? "invert(1) drop-shadow(-3px 5px 0px #0B2F53)"
        : "drop-shadow(-3px 5px 0px #f6c9a8)"};
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
    top: -52px;
    left: -53px;
    z-index: -1;
    width: 290px;
    filter: ${({ isDarkMode }) => (isDarkMode ? "invert(1)" : "drop-shadow")};
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

  .footer-divider {
    display: none;
  }

  /*Responsive*/
  @media (max-width: 1400px) {
    #row-footer {
      display: flex;
      flex-wrap: wrap;
    }

    #row-footer > div {
      flex: 0 0 50%;
      box-sizing: border-box;
    }
  }

  @media (max-width: 768px) {
    #row-footer > div {
      flex: 0 0 100%;
    }
  }
`;
