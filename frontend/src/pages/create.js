import { memo, useEffect } from 'react';

import NoteForm from '../components/NoteForm';

const CreatePage = () => {
  useEffect(() => {
    document.title = 'Create -T2Pad';
  }, []);

  return <NoteForm />;
};

export default memo(CreatePage);
