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
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;
    height: auto;
    width: 300px;
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
