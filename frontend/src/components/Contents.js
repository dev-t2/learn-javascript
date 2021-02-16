import { memo } from 'react';

const Contents = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div>
          <h2 className="my-8 text-xl sm:text-2xl font-bold text-blue-800 text-center sm:text-left">
            모든 화면 사이즈와 플랫폼에서 사용할 수 있는...
          </h2>
          <p className="mb-8 text-base sm:text-lg font-semibold text-gray-400 text-center sm:text-left">
            애플리케이션을 만들려고 노오오오력만 했습니다~!
          </p>

          <h2 className="mb-8 font-bold text-pink-500 text-center sm:text-left">
            Download Application
          </h2>
        </div>
      </div>
    </div>
  );
};

export default memo(Contents);
