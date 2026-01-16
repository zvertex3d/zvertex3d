import { createTheme } from "@mui/material/styles";

export const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#1a2a44"
      },
      secondary: {
        main: "#ff6d00"
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#0e1625",
        paper: mode === "light" ? "#ffffff" : "#1a2a44"
      },
      text: {
        primary: mode === "light" ? "#1a2a44" : "#ffffff",
        secondary: mode === "light" ? "#757575" : "#b0b0b0"
      }
    },
    shape: {
      borderRadius: 10
    },
    typography: {
      fontFamily: `"Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 }
    }
  });
