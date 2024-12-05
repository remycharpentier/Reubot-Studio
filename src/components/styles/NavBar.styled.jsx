import styled from "styled-components";

export const StyledNavBar = styled.div`
  position: relative;

  .burger {
    display: none;
    font-size: 30px;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    justify-content: end;
    display: flex;
    flex-direction: row;
    transition: max-height 0.3s ease;
  }

  li {
    display: inline;
    margin: auto 5px;
    text-transform: uppercase;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bolder;
  }

  @media (max-width: 992px) {
    .burger {
      display: block;
    }

    ul {
      flex-direction: column;
      max-height: 0;
      overflow: hidden;
    }

    ul.open {
      max-height: 300px;
    }

    li {
      margin: 10px 0;
    }
  }
`;
