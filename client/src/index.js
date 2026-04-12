import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#5B6E3A" },
    background: { default: "#f7f7f5" }
  },
  typography: {
    fontFamily: "Georgia, serif",
    h3: { fontSize: "3rem", fontWeight: 500 },
    h5: { fontWeight: 400 },
    button: { textTransform: "none" }
  },
  shape: {
    borderRadius: 14
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);