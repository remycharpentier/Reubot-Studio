import styled from "styled-components";

export const StyledMain = styled.div`
  min-height: 63vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/src/assets/img/game13.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 139%;
  background-position-x: right;
  #main-container {
    color: #f2f2f2;
    padding: 16px 12px;
  }
  #our-vg {
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
    width: 15rem;
    color: #f2f2f2;
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    min-height: 450px;
    .h5 {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      min-height: 48px;
    }
  }
  button {
    display: flex;
    justify-self: end;
  }
  .price {
    display: flex;
    justify-self: end;
    font-weight: bold;
  }
`;
