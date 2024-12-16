import styled from "styled-components";

export const StyledLatestGames = styled.div`
  .game-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    gap: 10px;
  }

  .game-item {
    flex: 1 1 calc(25% - 10px);
    min-width: 200px;
    margin-bottom: 10px;

    /* Responsive */
    @media (max-width: 992px) {
      flex: 1 1 calc(50% - 10px);
    }
    @media (max-width: 576px) {
      min-width: unset;
      max-width: 100%;
    }
  }

  .card {
    color: #f2f2f2;
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    min-height: 772px;
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
    font-size: 2.5rem;
    font-weight: bold;
  }
`;
