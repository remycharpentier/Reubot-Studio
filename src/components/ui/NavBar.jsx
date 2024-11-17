import { StyledNavBar } from "../styles/NavBar.styled";

export default function NavBar() {
  const navItems = ["Accueil", "Jeux", "Actualités", "A propos", "Contact"];
  return (
    <>
      <StyledNavBar>
        <ul>
          {navItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </StyledNavBar>
    </>
  );
}
