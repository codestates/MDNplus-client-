import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: {
      500: string;
      600: string;
      700: string;
    };

    gray: {
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
    };

    device: {
      tablet: string;
      laptop: string;
    };
  }
}
