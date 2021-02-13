import { memo } from 'react';

import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="T2Pad Logo" />
      </div>

      <div>
        <h1>T2Pad</h1>
      </div>
    </header>
  );
};

export default memo(Header);
