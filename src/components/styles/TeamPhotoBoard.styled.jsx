import styled from "styled-components";

const backgroundColors = [
  "rgba(201, 76, 78, 0.3)",
  "rgba(199, 122, 62, 0.3)",
  "rgba(209, 163, 42, 0.3)",
  "rgba(163, 168, 32, 0.3)",
  "rgba(62, 122, 90, 0.3)",
  "rgba(62, 122, 90, 0.3)",
  "rgba(15, 106, 158, 0.3)",
  "rgba(46, 78, 140, 0.3)",
  "rgba(78, 58, 106, 0.3)",
  "rgba(206, 175, 255, 0.3)",
  "rgba(246, 178, 255, 0.3)",
  "rgba(255, 198, 254, 0.3)",
];

export const StyledTeamPhotoBoard = styled.div`
  .team-card {
    padding: 10px;
    color: #f2f2f2;
    height: 100%;
  }
  .bg {
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  .board {
    margin-bottom: 60px;
  }
  ${backgroundColors.map(
    (color, index) => `
    .bg-${index} {
      background: ${color};
    }
  `
  )}
  .row.gap-20 {
    margin: -10px;
  }
  .row.gap-20 > .col {
    padding: 10px;
  }
  @media (max-width: 768px) {
    .team-card {
      font-size: 0.9rem;
    }
  }
`;
