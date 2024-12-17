import styled from "styled-components";

export const StyledGames = styled.div`
  .cards-box {
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
    gap: 0.7rem;
    padding: 1rem;
    max-width: 100%;
    height: 500px;
    scroll-snap-type: x mandatory;
    /* Effet mirroir */
    /* -webkit-box-reflect: below 1px linear-gradient(transparent, #0005); */
    button {
      scroll-snap-align: start;
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
  .games-list {
    margin-block: 40px;
    position: relative;
  }
  .scroll-button {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 50px;
    font-size: 2rem;
  }
  .scroll-left {
    left: 0;
  }
  .scroll-right {
    right: 0;
  }
  .scroll-button i {
    font-size: 2rem;
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
  /* Effet de style */
  /* .box:nth-child(odd) {
    transform: translateY(-16px);
  }
  .box:nth-child(even) {
    transform: translateY(16px);
  } */
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

  /* Selected game */
  .selected-game-box {
    margin-block: 40px;
    max-height: 400px;
  }
  .description-col {
    overflow-y: scroll;
    max-height: inherit;
    overflow-y: auto;
    p {
      margin-bottom: 0;
    }
  }
  .description-col::-webkit-scrollbar {
    width: 10px;
  }

  .description-col::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: #e7e7e7;
    border: 1px solid #cacaca;
  }
  .description-col::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #d55959;
  }
  .description-col::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .infos-box {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
  }
  .description-images {
    display: flex;
    gap: 1rem;
    padding-inline: 0;
  }
  .selected-game-cover {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
  .slider-col {
    padding-left: 0;
  }
  .selected-game-footage {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 10px;
  }
  // Responsive
  @media (max-width: 1200px) {
    .selected-game-box {
      max-height: none;
    }
    .slider-col,
    .selected-game-cover {
      margin-top: 12px;
      padding: 12px;
    }
  }
  @media (max-width: 768px) {
    .cover-col {
      padding: 0;
      margin-top: 12px;
    }
    .selected-game-cover {
      height: 600px;
      object-position: top;
    }
  }
`;
