import React, { Fragment } from 'react';

// components
import ResetCss from '@components/ResetCss';

function MyApp({ Component, pageProps }: any): JSX.Element {
  return (
    <Fragment>
      <ResetCss />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
