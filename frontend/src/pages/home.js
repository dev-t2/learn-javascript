import { useReactiveVar } from '@apollo/client';
import { memo, useEffect } from 'react';

import { isLoggedInVar } from '../apollo';
import SignInForm from '../components/SignInForm';

const Home = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    document.title = 'Home - T2Pad';
  }, []);

  return <section>{isLoggedIn ? null : <SignInForm />}</section>;
};

export default memo(Home);
