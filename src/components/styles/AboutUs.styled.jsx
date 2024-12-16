import styled from "styled-components";

export const StyledAboutUs = styled.div`
  .team-img {
    height: 300px;
    object-fit: cover;
    width: 100%;
    margin-block: 20px;
    border-radius: 10px;
  }
  .team-img2 {
    float: left;
  }
  .team-img4 {
    width: 700px;
  }
  .titre-ligne {
    margin-block: 40px;
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

  p {
    margin: 1em 0;
    text-indent: 20px;
  }
  .studio-img {
    border-radius: 10px;
    height: 440px;
    object-fit: cover;
    width: 100%;
  }
`;
