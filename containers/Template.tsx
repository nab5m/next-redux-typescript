/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx, css } from '@emotion/react';

// components
import Header from '@components/Header';

const container = css({
  backgroundColor: '#EFEFEF',
});

export default function Template() {
  return (
    <div css={container}>
      <Header />
    </div>
  );
}
