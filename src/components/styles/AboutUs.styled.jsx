import styled from "styled-components";

export const StyledAboutUs = styled.div`
  .team-img {
    height: 320px;
    object-fit: cover;
    width: 700px;
    float: right;
    margin-left: 50px;
    border-radius: 10px;
  }
  .team-img2 {
    float: left;
    margin-right: 50px;
    margin-left: 0;
  }
  .studio-img {
    height: 450px;
    object-fit: cover;
    width: 100%;
    margin-bottom: 30px;
    border-radius: 10px;
  }
  .titre-ligne {
    text-align: center;
    h2 {
      position: relative;
      display: inline-block;
    }
    h2::before,
    h2::after {
      content: " ";
      display: block;
      position: absolute;
      top: 50%;
      left: -120px;
      width: 100px;
      border-bottom: 1px solid #fff;
    }
    h2::after {
      left: auto;
      right: -120px;
    }
  }
`;