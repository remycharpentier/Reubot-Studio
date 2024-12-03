import styled from "styled-components";

export const StyledNews = styled.div`
  .row-article {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    padding: 12px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
  .col-md-3 {
    padding: 0;
  }
  .published-text {
    color: #c0c0c0;
  }
  p {
    margin: 1em 0;
    text-indent: 20px;
  }
`;
