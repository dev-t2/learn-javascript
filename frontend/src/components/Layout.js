import { memo } from 'react';

import Header from './Header';
import Contents from './Contents';

const title = 'T2Pad';
const items = ['Notes', 'Likes'];

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header title={title} items={items} />
      <Contents />

      <div className="flex-1">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default memo(Layout);
