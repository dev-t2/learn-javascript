import { memo } from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <p>This is home page</p>
    </div>
  );
};

export default memo(Home);
