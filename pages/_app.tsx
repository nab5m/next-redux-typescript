import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
