// Theme.js
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Couleur principale pour le mode clair
    },
    background: {
      default: "#F2F2F2", // Couleur de fond pour le mode clair
      paper: "#f5f5f5", // Couleur de fond pour les éléments de papier
    },
    text: {
      primary: "#000000", // Couleur du texte principal pour le mode clair
      secondary: "#555555", // Couleur du texte secondaire pour le mode clair
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Couleur principale pour le mode sombre
    },
    background: {
      default: "#121212", // Couleur de fond pour le mode sombre
      paper: "#1e1e1e", // Couleur de fond pour les éléments de papier
    },
    text: {
      primary: "#F2F2F2", // Couleur du texte principal pour le mode sombre
      secondary: "#bbbbbb", // Couleur du texte secondaire pour le mode sombre
    },
  },
});

export { lightTheme, darkTheme };
