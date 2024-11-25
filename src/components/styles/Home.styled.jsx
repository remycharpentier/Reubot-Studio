import styled from "styled-components";

export const StyledHome = styled.div`
  .team-img {
    height: 300px;
    object-fit: cover;
    width: 700px;
    float: right;
    shape-outside: content-box;
  }
  .titre-ligne {
    text-align: center;
    h3 {
      position: relative;
      display: inline-block;
    }
    h3::before,
    h3::after {
      content: " ";
      display: block;
      position: absolute;
      top: 50%;
      left: -120px;
      width: 100px;
      border-bottom: 1px solid #fff;
    }
    h3::after {
      left: auto;
      right: -120px;
    }
  }
  .card {
    padding: 0;
    width: 19rem;
    color: #f2f2f2;
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    min-height: 620px;
    .h5 {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      min-height: 48px;
    }
  }
  .card-body {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .card-text {
    margin: 0;
  }
  button {
    display: flex;
    justify-self: end;
  }
  .price {
    margin-top: auto;
    align-self: flex-end;
    font-weight: bold;
  }
`;
