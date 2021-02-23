import { memo } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ items }) => {
  return (
    <nav className="hidden sm:flex ml-6 space-x-2">
      {items.map((item, index) => (
        <Link key={index} className="nav-link" to={`/${item.link}`}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default memo(Nav);
