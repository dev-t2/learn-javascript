import { memo } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center flex-1 justify-center sm:justify-start">
          <div className="flex items-center">
            <Link to="/">
              <svg
                className="w-8 h-8 text-white"
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

            <Link className="hidden sm:block text-white font-semibold text-xl ml-2" to="/">
              T2Pad
            </Link>
          </div>

          <div className="hidden sm:flex sm:ml-4 md:ml-6 sm:space-x-2 md:space-x-4">
            <Link className="header-link" to="/notes">
              Notes
            </Link>
            <Link className="header-link" to="/likes">
              Likes
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
