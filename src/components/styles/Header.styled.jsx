import styled from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
  z-index: 1;

  .logo-box {
    position: relative;

    a {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      max-width: fit-content;

      h1 {
        position: absolute;
        bottom: 0;
        left: 97px;
        min-width: max-content;
      }

      img {
        position: absolute;
        bottom: 8px;
        right: -178px;
        margin-top: 16px;
        border-radius: 10px;
        width: 169px;
      }
    }
  }

  .brush-img {
    width: 500px;
    position: absolute;
    right: 303px;
    top: 96px;
    z-index: -1;
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
`;
