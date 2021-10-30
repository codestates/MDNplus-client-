import { DefaultTheme } from "styled-components";

const size = {
  tablet: "768px",
  laptop: "1024px",
};

export const theme: DefaultTheme = {
  primary: {
    500: "#3b85f3",
    600: "#0074d9",
    700: "#1565C0",
  },

  gray: {
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
  },

  device: {
    tablet: `screen and (min-width: ${size.tablet})`,
    laptop: `screen and (min-width: ${size.laptop})`,
  },
};
