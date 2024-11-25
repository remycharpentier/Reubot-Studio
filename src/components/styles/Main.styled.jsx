import styled from "styled-components";

export const StyledMain = styled.div`
  min-height: 54vh;
  background-image: linear-gradient(rgba(0, 0, 0, -1), rgba(0, 0, 0, 1)),
    linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, -1)),
    url(/src/assets/img/game13.jpg), url(/src/assets/img/game14.jpg);
  background-repeat: repeat, repeat, no-repeat, repeat;
  background-position: top;
  background-size: 100% 1488px, 100% 1488px, 139%, 139%;
  background-position-x: center, center, right, left;
  background-position-y: top, top, top, top;
  #main-container {
    color: #f2f2f2;
    padding: 16px 12px;
  }
`;
