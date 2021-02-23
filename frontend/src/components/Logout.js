import { memo, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';

import client, { isLoggedInVar } from '../apollo';

const Logout = ({ history, className }) => {
  const onClick = useCallback(() => {
    localStorage.removeItem('token');

    client.resetStore();

    isLoggedInVar(false);

    history.replace('/');
  }, [history]);

  return (
    <button
      className={`focus:outline-none hover:bg-blue-900 p-1 rounded-md ${className}`}
      onClick={onClick}
    >
      <BiExit className="text-white text-2xl sm:text-3xl" />
    </button>
  );
};

export default withRouter(memo(Logout));
