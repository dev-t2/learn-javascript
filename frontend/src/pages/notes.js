import { useQuery } from '@apollo/client';
import { memo, useEffect } from 'react';

import { GET_MY_NOTES } from '../apollo/query';
import NoteItem from '../components/NoteItem';

const Notes = () => {
  const { data } = useQuery(GET_MY_NOTES);

  useEffect(() => {
    document.title = 'Notes - T2Pad';
  }, []);

  return (
    <div className="max-w-2xl mt-4 p-4 mx-auto space-y-4">
      {data?.me?.notes?.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default memo(Notes);
