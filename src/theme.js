import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fe5d31",
    },
    secondary: {
      main: "#9d9daf",
    },
  },
  typography: {
    fontFamily: "'Outfit', 'Roboto', sans-serif",
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {},
      },
    },
  },
});
