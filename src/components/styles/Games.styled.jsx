import styled from "styled-components";

export const StyledGames = styled.div`
  .cards-box {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
    transition: all 400ms;
    width: auto;
    height: 500px;
    button {
      border: none;
      outline: none;
      background: transparent;
      cursor: pointer;
      padding: 0;
    }
    img {
      width: 150px;
      height: 500px;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  .cards-box:hover .box {
    filter: grayscale(100%) opacity(24%);
  }
  .box {
    position: relative;
    transition: all 400ms;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .cards-box .box:hover {
    filter: grayscale(0%) opacity(100%);
  }

  .cards-box:hover .box-1 {
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  }

  .cards-box:hover .box-2 {
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  }
  .box:nth-child(odd) {
    transform: translateY(-16px);
  }

  .box:nth-child(even) {
    transform: translateY(16px);
  }

  .box::after {
    content: attr(data-text);
    position: absolute;
    bottom: 20px;
    background: #000;
    color: #fff;
    padding: 10px 10px 10px 14px;
    transform: translateY(60px);
    opacity: 0;
    transition: all 400ms;
  }

  .box:hover::after {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 200ms;
  }
  .selected-game-img img {
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
