import React from 'react';
import { Header, Welcome, Learn, Places } from 'organisms/organisms';

export default () => (
  <>
    <Header />
    <main className="main">
      <Welcome />
      <Learn />
      <Places />
    </main>
  </>
);