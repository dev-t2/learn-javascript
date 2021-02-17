import { memo } from 'react';

const Contents = () => {
  return (
    <section>
      <div className="container lg:mt-4 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row flex-wrap items-center">
        <div className="flex flex-col w-full justify-center lg:items-start">
          <h2 className="my-8 text-xl sm:text-2xl font-bold text-blue-800 text-center sm:text-left">
            모든 화면 사이즈와 플랫폼에서 사용할 수 있는...
          </h2>
          <p className="mb-8 text-base sm:text-lg font-semibold text-gray-400 text-center sm:text-left">
            애플리케이션을 만들려고 노오오오력만 했습니다~!
          </p>

          <h2 className="mb-8 font-bold text-pink-500 text-center sm:text-left">
            Download Application
          </h2>

          <div className="flex w-full justify-center sm:justify-start space-x-4">
            <img className="h-12 rounded-md" src="images/microsoft.svg" alt="microsoft" />
            <img className="h-12" src="images/google.svg" alt="google" />
          </div>
        </div>

        <div className="w-full my-6">
          <img className="mx-auto" src="images/devices.svg" alt="device" />
        </div>
      </div>
    </section>
  );
};

export default memo(Contents);
