import { useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledNavBar } from "../styles/NavBar.styled";
import { NavDropdown } from "react-bootstrap";
import navItems from "../../constants/NavItems";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <StyledNavBar>
      <ul className={isOpen ? "open" : ""}>
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink to={item.namePath} onClick={handleNavLinkClick}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* Burger */}
      <NavDropdown
        title={<span>&#9776;</span>}
        id="basic-nav-dropdown"
        className="dropdown-menu-responsive"
      >
        {navItems.map((item) => (
          <div key={item.id}>
            <NavLink to={item.namePath} onClick={() => setIsOpen(false)}>
              {item.name}
            </NavLink>
          </div>
        ))}
      </NavDropdown>
    </StyledNavBar>
  );
}
