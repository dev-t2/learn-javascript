import { FC, memo } from 'react';

interface IBook {
  name: string;
  numOfPage: number;
}

const Book: FC<IBook> = ({ name, numOfPage }) => {
  return (
    <div>
      <h1>{`이 책의 이름은 '${name}'입니다.`}</h1>
      <h2>{`이 책은 총 ${numOfPage} 페이지로 이루어져 있습니다.`}</h2>
    </div>
  );
};

export default memo(Book);
