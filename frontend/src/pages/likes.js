import { memo, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_MY_LIKES } from '../apollo/query';
import NoteItem from '../components/NoteItem';

const Likes = () => {
  const { data } = useQuery(GET_MY_LIKES);

  useEffect(() => {
    document.title = 'Likes - T2Pad';
  }, []);

  return (
    <div className="max-w-7xl px-4 mx-auto mt-8">
      {data?.me?.notes?.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default memo(Likes);
