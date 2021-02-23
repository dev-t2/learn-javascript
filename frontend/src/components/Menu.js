import { memo } from 'react';
import { IoClose } from 'react-icons/io5';
import { BiMenu } from 'react-icons/bi';

const Menu = ({ isMenu, onClick }) => (
  <button
    className="sm:hidden focus:outline-none hover:bg-blue-900 p-1 rounded-md"
    onClick={onClick}
  >
    {isMenu ? (
      <IoClose className="text-white text-2xl sm:text-3xl" />
    ) : (
      <BiMenu className="text-white text-2xl sm:text-3xl" />
    )}
  </button>
);

export default memo(Menu);
