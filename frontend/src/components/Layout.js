import { memo } from 'react';

import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div className="flex-1">
        <main>{children}</main>
      </div>
    </>
  );
};

export default memo(Layout);
