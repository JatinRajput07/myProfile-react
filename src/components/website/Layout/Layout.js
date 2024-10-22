import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className='website'>
      <Helmet>
        <title>My-Profile</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
