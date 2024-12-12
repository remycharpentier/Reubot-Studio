import styled from "styled-components";

export const StyledAboutUs = styled.div`
  .team-img {
    height: 300px;
    object-fit: cover;
    width: 600px;
    float: right;
    margin-inline: 40px;
    margin-block: 20px;
    border-radius: 10px;
  }
  .team-img2 {
    float: left;
  }
  .team-img3 {
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

  .studio-img {
    height: 240px;
    object-fit: cover;
    width: auto;
  }
  p {
    margin: 1em 0;
    text-indent: 20px;
  }

  /* Responsive */
  @media (max-width: 992px) {
    .team-img {
      width: 100% !important;
      margin-inline: 0 !important;
      float: none !important;
      margin-bottom: 30px !important;
    }
  }
`;
