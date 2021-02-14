import { memo } from 'react';

import Pages from './pages';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Pages />
    </div>
  );
};

export default memo(App);
