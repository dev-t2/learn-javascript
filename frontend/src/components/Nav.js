import { memo } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ items }) => {
  return (
    <nav className="hidden sm:flex ml-6 space-x-4">
      {items.map((item, index) => (
        <Link key={index} className="nav-link" to={`/${item.toLowerCase()}`}>
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default memo(Nav);
