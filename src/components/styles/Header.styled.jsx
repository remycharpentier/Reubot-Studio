import styled from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 10px;
  .logo-box {
    position: relative;
    a {
      position: absolute;
      display: inline-block;
      z-index: 2;
      .logo-img {
        filter: ${(props) =>
          props.isDarkMode
            ? "invert(1) drop-shadow(-3px 5px 0px #0B2F53)"
            : "drop-shadow(-3px 5px 0px #f6c9a8)"};
        position: absolute;
        z-index: 2;
        width: 200px;
      }
      h1 {
        position: absolute;
        z-index: 2;
        top: 61px;
        left: 103px;
        min-width: max-content;
      }
      .brush-img {
        width: 58vh;
        position: absolute;
        top: 53px;
        right: -364px;
        z-index: -1;
        filter: ${(props) => (props.isDarkMode ? "invert(1)" : "drop-shadow")};
        transition: filter 0.3s ease;
      }
    }
  }

  .nav-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-bottom: 10px;
  }

  .groupe-switch {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 10px;
    font-weight: bolder;
    width: 100%;
  }

  #theme-mode {
    margin: 0;
    background-color: #ff9791;
    border-color: #ff9791;
  }

  #admin-mode {
    margin: 0;
    background-color: #ddbea9;
    border-color: #ddbea9;
  }

  #theme-mode:checked {
    background-color: #026b6f;
    border-color: #0b2f53;
  }

  #admin-mode:checked {
    background-color: #6e4c0d;
    border-color: #6e4c0d;
  }

  #admin-mode:focus,
  #theme-mode:focus {
    outline: none;
    box-shadow: none;
  }
  .form-switch {
    padding-left: 0;
  }
  // Responsive
  @media (max-width: 992px) {
    .row {
      max-height: 98px;
    }
    .logo-box {
      a {
        h1 {
          top: 65px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .logo-box {
      a {
        h1 {
          top: 68px;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .logo-box {
      a {
        h1 {
          top: 70px;
        }
      }
    }
  }
`;
