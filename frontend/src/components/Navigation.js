import { memo } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/notes">Notes</Link>
        </li>

        <li>
          <Link to="/likes">Likes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Navigation);
