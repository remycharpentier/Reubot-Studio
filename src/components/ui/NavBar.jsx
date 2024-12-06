import { useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledNavBar } from "../styles/NavBar.styled";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Accueil", namePath: "home" },
    { id: 2, name: "Jeux", namePath: "games" },
    { id: 3, name: "Actualités", namePath: "news" },
    { id: 4, name: "A propos", namePath: "about-us" },
    { id: 5, name: "Contact", namePath: "contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavBar>
      <ul className={isOpen ? "open" : ""}>
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink to={item.namePath} onClick={() => setIsOpen(false)}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="burger" onClick={toggleMenu}>
        &#9776; {/* Symbole burger */}
      </div>
    </StyledNavBar>
  );
}
