import { memo } from 'react';

import Header from './Header';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div className="container">
        <Navigation />

        <main>{children}</main>
      </div>
    </>
  );
};

export default memo(Layout);
