import styled from "styled-components";

export const StyledNews = styled.div`
  .row-article {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    padding: 12px 0;
    max-height: fit-content;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    /* height: 100%; */
    height: 223px;
    border-radius: 5px;
    object-fit: cover;
  }
  .published-text {
    color: #c0c0c0;
  }
  p {
    margin: 1em 0;
    text-indent: 20px;
  }

  /* Responsive */
  @media (max-width: 1400px) {
    img {
      height: 253px;
    }
  }
  @media (max-width: 1200px) {
    img {
      height: 334px;
    }
  }
  @media (max-width: 992px) {
    .published-text {
      margin-top: 20px;
    }
    .text-box {
      margin-top: 20px;
    }
  }
  @media (max-width: 768px) {
    img {
      height: 257px;
    }
  }
`;
