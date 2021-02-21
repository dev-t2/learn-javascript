import { memo } from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ title }) => {
  return (
    <h1 className="flex items-center">
      <Link to="/">
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

      <Link className="hidden sm:block text-white text-xl font-semibold ml-2" to="/">
        {title}
      </Link>
    </h1>
  );
};

export default memo(Logo);
