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
    default: "#323D45",
    light: "#FFFFFF",
  },

  device: {
    tablet: `screen and (min-width: ${size.tablet})`,
    laptop: `screen and (min-width: ${size.laptop})`,
  },
};
