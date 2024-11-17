import styled from "styled-components";

export const StyledNavBar = styled.div`
  ul {
    list-style-type: none;
    justify-content: end;
    display: flex;
  }
  li {
    display: inline;
    margin: auto 5px;
    text-transform: uppercase;
    font-weight: bold;
  }
  .nav-bar {
    display: flex;
    flex-flow: column-reverse;
    color: red;
  }
`;
