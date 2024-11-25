import { NavLink } from "react-router-dom";
import { StyledNavBar } from "../styles/NavBar.styled";

export default function NavBar() {
  const navItems = [
    {
      id: 1,
      name: "Accueil",
      namePath: "home",
    },
    {
      id: 2,
      name: "Jeux",
      namePath: "games",
    },
    {
      id: 3,
      name: "Actualités",
      namePath: "news",
    },
    {
      id: 4,
      name: "A propos",
      namePath: "about-us",
    },
    {
      id: 5,
      name: "Contact",
      namePath: "contact",
    },
  ];

  return (
    <>
      <StyledNavBar>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink to={item.namePath}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </StyledNavBar>
    </>
  );
}
