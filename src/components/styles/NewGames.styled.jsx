import styled from "styled-components";

export const StyledNewGames = styled.div`
  .game-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    gap: 10px;
  }
  .game-item {
    list-style-type: none;
    flex: 1 1 calc(25% - 10px);
    min-width: 200px;
    margin-bottom: 10px;
  }
  .price {
    text-align: end;
    font-size: 2.5rem;
  }
  .card {
    padding: 0;
    color: #f2f2f2;
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    min-height: 719px;
    overflow: hidden;
    img {
      max-height: 400px;
      object-fit: cover;
      width: 100%;
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
  .price {
    margin-top: auto;
    align-self: flex-end;
    font-weight: bold;
  }
`;
