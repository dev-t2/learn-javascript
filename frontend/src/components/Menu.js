import { memo } from 'react';

const Menu = ({ isMenu, onClick }) => (
  <button
    className="sm:hidden w-16 text-white hover:bg-blue-900 p-2 rounded-md focus:outline-none"
    onClick={onClick}
  >
    {isMenu ? (
      <svg
        className="block h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className="block h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )}
  </button>
);

export default memo(Menu);
