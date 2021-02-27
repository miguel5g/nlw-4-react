import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import dark from '../styles/themes/Dark';
import light from '../styles/themes/Light';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
