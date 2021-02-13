import { memo, useEffect } from 'react';

const Likes = () => {
  useEffect(() => {
    document.title = 'Likes - T2Pad';
  }, []);

  return (
    <>
      <h1>T2Pad</h1>
      <p>This is the likes page</p>
    </>
  );
};

export default memo(Likes);
