import styled from "styled-components";

export const StyledNavBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

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
    font-weight: bolder;
  }

  /* Responsive */
  @media (min-width: 993px) {
    .dropdown-menu-responsive {
      display: none !important;
    }
  }

  @media (max-width: 992px) {
    .dropdown-toggle::after {
      display: none;
    }
    .dropdown-menu-responsive {
      font-size: xx-large;
      padding-left: 30px;
      position: relative;
      bottom: 15px;
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
