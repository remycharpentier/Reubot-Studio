import styled from "styled-components";

export const StyledHome = styled.div`
  .team-img {
    height: 287px;
    object-fit: cover;
    width: 700px;
    float: right;
    shape-outside: content-box;
    border-radius: 10px;
  }
  .welcome-text {
    display: -webkit-box;
    padding-right: 40px;
  }
  .indent {
    text-indent: 20px;
  }
  .titre-ligne {
    text-align: center;
    h1 {
      position: relative;
      display: inline-block;
    }
    h1::before,
    h1::after {
      content: " ";
      display: block;
      position: absolute;
      top: 50%;
      left: -120px;
      width: 100px;
      border-bottom: 1px solid #fff;
    }
    h1::after {
      left: auto;
      right: -120px;
    }
  }
`;
