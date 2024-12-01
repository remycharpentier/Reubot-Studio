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
        bottom: 0px;
        left: 97px;
        max-width: fit-content;
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
  h2 {
    margin-top: 0;
    margin-bottom: 13px;
  }
  .nav-bar {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;
    height: auto;
    width: 300px;
    padding: 10px 0 14px 0;
  }

  .groupe-switch {
    padding: 6px 15px 0px 15px;
    border-radius: 10px;
  }
  .admin {
    margin-top: 16px;
    font-weight: bolder;
  }

  .groupe-switch {
    justify-content: end;
    display: flex;
    align-items: center;
    font-weight: bolder;
    padding-right: 0;
  }

  #custom-switch {
    margin: 0%;
    background-color: #e9ecef;
    border-color: #adb5bd;
  }

  #custom-switch:checked {
    background-color: #ff9791;
    border-color: #ff9791;
    box-shadow: 0 0 0 0.2rem rgba(241, 234, 185, 0.5);
  }

  #custom-switch:focus {
    outline: none;
    box-shadow: none;
  }

  .form-switch {
    padding: 0;
  }
`;
