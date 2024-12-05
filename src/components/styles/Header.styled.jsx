import styled from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
  z-index: 1;

  .logo-box {
    position: relative;

    a {
      position: relative;
      display: inline-block;
      z-index: 2;

      h1 {
        position: relative;
        z-index: 2;
        display: inline-block;
        top: 41px;
        right: 100px;
      }
    }
  }
  .logo-img {
    position: relative;
    z-index: 2;
    top: 9px;
    position: relative;
    filter: drop-shadow(-3px 5px 0px #f6c9a8);
  }

  .brush-img {
    width: 500px;
    position: absolute;
    top: 71px;
    left: -106px;
    z-index: 1;
  }

  .nav-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px 0 14px;
    width: 300px;
  }

  .groupe-switch {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 6px 15px;
    border-radius: 10px;
    font-weight: bolder;
    width: 100%;
  }

  #admin-mode,
  #theme-mode {
    margin: 0;
    background-color: #e9ecef;
    border-color: #adb5bd;
  }

  #admin-mode:checked,
  #theme-mode:checked {
    background-color: #ff9791;
    border-color: #ff9791;
    box-shadow: 0 0 0 0.2rem rgba(241, 234, 185, 0.5);
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
  @media (max-width: 1400px) {
    .brush-img {
      right: 300px;
    }
  }
  @media (max-width: 992px) {
    .brush-img {
      right: 300px;
    }
    h1 {
      bottom: 50px;
      left: 100px;
    }
  }
`;
