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
  .row-description {
    max-height: 450px;
  }
  .selected-game-info {
    overflow-y: scroll;
    max-height: inherit;
    overflow-y: auto;
  }

  .selected-game-info::-webkit-scrollbar {
    width: 10px;
  }

  .selected-game-info::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: #e7e7e7;
    border: 1px solid #cacaca;
  }

  .selected-game-info::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #d55959;
  }

  .selected-game-info::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .flex-space-between {
    display: flex;
    justify-content: space-between;
  }
  .description-images {
    display: flex;
    gap: 1rem;
  }

  .selected-game-cover {
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 10px;
  }
  .selected-game-footage {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 10px;
  }
  .swiper-box {
    max-height: 450px;
    width: 350px;
    flex: 1;
    .mySwiper2 img {
      object-fit: cover;
      height: 395px;
      border-radius: 10px 10px 0 0;
      border: red 1px;
    }
  }
  .swiper-slide img {
    width: 100%;
  }
  .swiper-slide img:not(.mySwiper2 img) {
    width: 100%;
    height: 55px;
    object-fit: cover;
  }
`;
