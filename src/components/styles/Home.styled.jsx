import styled from "styled-components";

export const StyledHome = styled.div`
  h1 {
    margin-bottom: 40px;
  }
  .team-img {
    width: 100%;
    max-width: 700px;
    height: auto;
    max-height: 280px;
    float: right;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 20px;
    margin-left: 30px;
  }

  .welcome-text {
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
      margin: 40px 20px;
    }
    h1::before,
    h1::after {
      content: "";
      display: block;
      color: green;
      position: absolute;
      top: 50%;
      width: 100px;
      border-bottom: 1px solid #fff;
    }
    h1::before {
      left: -120px;
    }
    h1::after {
      right: -120px;
    }
  }
`;
