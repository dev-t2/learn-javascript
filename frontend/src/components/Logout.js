import { memo, useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import client, { isLoggedInVar } from '../apollo';

const Logout = ({ history, className }) => {
  const onClick = useCallback(() => {
    localStorage.removeItem('token');

    client.resetStore();

    isLoggedInVar(false);

    history.replace('/');
  }, [history]);

  return (
    <button className={`w-16 header-logout ${className}`} onClick={onClick}>
      Logout
    </button>
  );
};

export default withRouter(memo(Logout));
