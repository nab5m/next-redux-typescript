import React from 'react';
import Head from 'next/head';

// containers
import Template from '@containers/Template';

export default function Home() {
  return (
    <div>
      <Head>
        <title>next redux typescript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Template />
      </main>

      <footer></footer>
    </div>
  );
}
