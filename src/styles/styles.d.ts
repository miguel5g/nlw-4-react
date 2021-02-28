import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      background: string;
      grayLine: string;
      text: string;
      textHighlight: string;
      title: string;
      red: string;
      green: string;
      blue: string;
      blueDark: string;
      blueLight: string;
      blueTwitter: string;
      grayGithub: string;
    }
  }
}