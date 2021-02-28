import React from 'react';
import { ThemeProvider } from 'styled-components';
import UserProvider from '../contexts/UserContext';

import { GlobalStyle } from '../styles/global';
import dark from '../styles/themes/Dark';
import light from '../styles/themes/Light';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <UserProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  )
}

export default MyApp
