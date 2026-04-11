import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A66C2"
    },
    secondary: {
      main: "#E3F2FD"
    },
    background: {
      default: "#F4F8FB"
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif"
  }
});

export default theme;