import { memo } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full px-4 py-3 bg-blue-700 flex items-center justify-between shadow">
      <div className="flex items-center">
        <div>
          <Link className="block mr-4" to="/">
            <svg
              className="h-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </Link>
        </div>

        <div>
          <Link to="/">
            <h1 className="text-xl font-semibold text-white">T2Pad</h1>
          </Link>
        </div>
      </div>

      <nav>
        <ul className="flex">
          <li>
            <Link className="link" to="/notes">
              NOTES
            </Link>
          </li>

          <li>
            <Link className="link" to="/likes">
              LIKES
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
