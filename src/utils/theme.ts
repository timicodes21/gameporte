import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#386EB2",
      secondary: "#46505A",
    },
    primary: {
      main: "#091434",
    },
    // secondary: {
    //   main: "#212121",
    //   light: "#52565C",
    //   A100: "#74757E",
    //   A200: "#242731",
    //   A400: "#464F60",
    //   A700: "#5A6376",
    // },

    info: {
      dark: "#EAEAEB",
      main: "#FFFFFF",
      A100: "#FAFAFA",
      A200: "#CFD0D3",
    },
    // error: {
    //   main: "#FB5A36",
    // },
  },
});
