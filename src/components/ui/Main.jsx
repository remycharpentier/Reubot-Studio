import { Outlet } from "react-router-dom";
import { StyledMain } from "../styles/Main.styled";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Main({ isDarkMode }) {
  return (
    <>
      <StyledMain>
        <Container id="main-container">
          <Outlet context={{ isDarkMode }} />
        </Container>
      </StyledMain>
    </>
  );
}
// Validation des props
Main.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
