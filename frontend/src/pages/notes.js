import { memo, useEffect } from 'react';

const Notes = () => {
  useEffect(() => {
    document.title = 'Notes - T2Pad';
  }, []);

  return (
    <>
      <p>This is the notes page</p>
    </>
  );
};

export default memo(Notes);
