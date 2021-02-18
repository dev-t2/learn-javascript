import { memo } from 'react';

const Contents = () => {
  return (
    <section>
      <div className="max-w-7xl px-4 mx-auto mt-8 sm:mt-12 flex flex-col">
        <h2 className="sm:ml-8 mb-2 sm:mb-4 text-base sm:text-3xl md:text-4xl font-bold text-blue-800 flex justify-center sm:justify-start">
          THIS, TOO, SHALL PASS AWAY.
        </h2>
        <p className="sm:ml-8 mb-8 text-xs sm:text-base md:text-lg font-bold text-gray-400 flex justify-center sm:justify-start">
          잊지 말자. 지금 내가 열고 들어온 문이 한 때는 다 벽이었다는걸...
        </p>

        <h2 className="sm:ml-8 mb-4 text-xs sm:text-base md:text-lg font-bold text-pink-600 flex justify-center sm:justify-start">
          Download Application
        </h2>

        <div className="sm:ml-8 mb-10 space-x-4 flex justify-center sm:justify-start">
          <img
            className="h-10 sm:h-12 md:h-14 rounded-lg"
            src="images/microsoft.svg"
            alt="microsoft"
          />
          <img className="h-10 sm:h-12 md:h-14" src="images/google.svg" alt="google" />
        </div>

        <div className="sm:mr-8 flex justify-center sm:justify-end">
          <img className="h-36 sm:h-80 md:h-96" src="images/devices.svg" alt="device" />
        </div>
      </div>
    </section>
  );
};

export default memo(Contents);
