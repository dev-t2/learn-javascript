import { memo } from 'react';
import Book from './components/Book';

const App = () => {
  return (
    <div>
      <Book name="JavaScript" numOfPage={300} />
      <Book name="TypeScript" numOfPage={200} />
      <Book name="React" numOfPage={400} />
    </div>
  );
};

export default memo(App);
