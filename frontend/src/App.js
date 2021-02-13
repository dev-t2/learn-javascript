import { memo } from 'react';

import Pages from './pages';

const App = () => {
  return (
    <div>
      <Pages />
    </div>
  );
};

export default memo(App);
