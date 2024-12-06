import styled from "styled-components";

export const StyledContact = styled.div`
  .form {
    margin-right: 100px;
  }
  button {
    float: right;
  }
  .feebackMessage {
    display: block;
    margin-top: 10px;
  }
  .correct {
    width: 20px;
    margin-right: 10px;
  }
  input,
  textarea {
    background-color: #dcdcdc;
  }
  .custom-label {
    position: relative;
    margin-bottom: 37.5px;
    margin-top: 21px;
  }

  .custom-label input {
    padding: 0.625rem;
    border: 1px solid #030104;
  }

  .custom-label label {
    position: absolute;
    font-weight: bolder;
    border-radius: 5px;
    top: 0px;
    left: 0;
    transform: translate(0.625rem, 0.625rem);
    color: #030104;
    background: rgb(242, 221, 177);
    background: linear-gradient(
      90deg,
      rgba(242, 221, 177, 1) 0%,
      rgba(255, 144, 138, 1) 100%
    );
    padding-inline: 0.25rem;
    border: 2px solid transparent;
  }

  textarea {
    border: 1px solid transparent;
    border-color: #030104;
  }

  .custom-label:focus-within label,
  .custom-label:not(:has(:placeholder-shown)) label {
    transform: translate(0.625rem, -1rem);
    border-color: #030104;
  }
`;