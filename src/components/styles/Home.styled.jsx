import styled from "styled-components";

export const StyledHome = styled.div`
  .team-img {
    height: 300px;
    object-fit: cover;
    width: 700px;
    float: right;
    shape-outside: content-box;
    border-radius: 10px;
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
  .card {
    padding: 0;
    width: 19rem;
    color: #f2f2f2;
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    min-height: 719px;
    overflow: hidden;
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
