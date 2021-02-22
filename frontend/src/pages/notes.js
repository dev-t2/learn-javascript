import { useQuery } from '@apollo/client';
import { memo, useEffect } from 'react';
import { GET_ME } from '../apollo/query';

import NoteItem from '../components/NoteItem';

const NotesPage = () => {
  const { data } = useQuery(GET_ME);

  useEffect(() => {
    document.title = 'Notes - T2Pad';
  }, []);

  console.log(data);

  return (
    <div className="max-w-7xl px-4 mx-auto mt-8">
      {data?.me?.notes?.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default memo(NotesPage);
