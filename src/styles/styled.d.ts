import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: {
      500: string;
      600: string;
      700: string;
    };

    gray: {
      default: string;
      light: string;
    };

    device: {
      tablet: string;
      laptop: string;
    };
  }
}
