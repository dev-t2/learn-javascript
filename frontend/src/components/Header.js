import { useReactiveVar } from '@apollo/client';
import { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { isLoggedInVar } from '../apollo';
import Logo from './Logo';
import Logout from './Logout';
import Menu from './Menu';
import Nav from './Nav';

const menuItems = ['Notes', 'Likes'];

const Header = ({ title, navItems }) => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  console.log(isLoggedIn);

  const [isMenu, setIsMenu] = useState(false);

  const onClick = useCallback(() => {
    setIsMenu((prev) => !prev);
  }, []);

  return (
    <header className="bg-blue-800">
      <div className="h-14 sm:h-16 max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex-1 flex items-center justify-between sm:justify-start">
          <Menu isMenu={isMenu} onClick={onClick} />
          <Logo title={title} />
          <Nav items={navItems} />
          <Logout className="block sm:hidden" />
        </div>

        <Logout className="hidden sm:block" />
      </div>

      {isMenu && (
        <div className="sm:hidden p-2 pb-6 space-y-1">
          {menuItems.map((item, index) => (
            <Link key={index} className="menu-link" to={`/${item}`}>
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default memo(Header);
