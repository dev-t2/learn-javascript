import { memo } from 'react';

import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default memo(Layout);
