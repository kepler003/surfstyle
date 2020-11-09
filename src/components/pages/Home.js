import React from 'react';
import { Header, Welcome, Learn, Places, Services, Testimonials } from 'organisms/organisms';

export default () => (
  <>
    <Header />
    <main className="main">
      <Welcome />
      <Learn />
      <Places />
      <Services />
      <Testimonials />
    </main>
  </>
);