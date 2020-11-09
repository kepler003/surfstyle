import React from 'react';
import { Header, Welcome, Learn } from 'organisms/organisms';

export default () => (
  <>
    <Header />
    <main className="main">
      <Welcome />
      <Learn />
    </main>
  </>
);