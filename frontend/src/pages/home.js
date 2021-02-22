import { useReactiveVar } from '@apollo/client';
import { memo, useEffect } from 'react';

import { isLoggedInVar } from '../apollo';
import SignInForm from '../components/SignInForm';

const Home = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    document.title = 'T2Pad';
  }, []);

  return (
    <section>
      <div className="max-w-7xl px-4 mx-auto mt-8 sm:mt-12 flex flex-col">
        <h2 className="sm:ml-8 mb-1 sm:mb-2 text-2xl sm:text-4xl font-bold text-blue-800 flex justify-center sm:justify-start">
          THIS, TOO, SHALL PASS AWAY.
        </h2>

        <p className="sm:ml-8 mb-8 sm:mb-12 text-xs sm:text-base text-gray-400 flex justify-center sm:justify-start">
          잊지 말자. 지금 내가 열고 들어온 문이 한 때는 다 벽이었다는걸...
        </p>

        <h2 className="sm:ml-8 mb-2 sm:mb-4 text-xs sm:text-base md:text-lg font-bold text-pink-600 flex justify-center sm:justify-start">
          Download Application
        </h2>

        <div className="sm:ml-8 mb-8 sm:mb-16 space-x-4 flex justify-center sm:justify-start">
          <img
            className="h-10 sm:h-12 md:h-14 rounded-md sm:rounded-lg cursor-pointer"
            src="images/microsoft.svg"
            alt="microsoft"
          />
          <img
            className="h-10 sm:h-12 md:h-14 cursor-pointer"
            src="images/google.svg"
            alt="google"
          />
        </div>

        <div className="md:mr-8 flex justify-center md:justify-end">
          <img className="h-64 md:h-80 lg:h-96" src="images/devices.svg" alt="device" />
        </div>
      </div>

      {isLoggedIn ? null : <SignInForm />}
    </section>
  );
};

export default memo(Home);
