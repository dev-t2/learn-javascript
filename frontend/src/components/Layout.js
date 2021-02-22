import { memo } from 'react';

import Header from './Header';
import Footer from './Footer';

const navItems = ['Create', 'Notes', 'Likes'];

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header title="T2Pad" navItems={navItems} />

      <main className="flex-1">{children}</main>

      <Footer title="&copy; T2Pad 2021" />
    </div>
  );
};

export default memo(Layout);
