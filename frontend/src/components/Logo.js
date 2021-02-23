import { memo } from 'react';
import { Link } from 'react-router-dom';
import { BiNotepad } from 'react-icons/bi';

const Logo = ({ title }) => {
  return (
    <h1 className="flex items-center hover:bg-blue-900 px-2 py-1 rounded-md">
      <Link to="/">
        <BiNotepad className="hidden sm:block text-white text-3xl" />
      </Link>

      <Link className="text-white text-xl sm:text-2xl font-semibold sm:pl-1" to="/">
        {title}
      </Link>
    </h1>
  );
};

export default memo(Logo);
