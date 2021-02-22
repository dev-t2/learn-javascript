import { memo } from 'react';
import { useQuery } from '@apollo/client';

import { GET_NOTE } from '../apollo/query';
import NoteItem from '../components/NoteItem';

const Note = ({ match }) => {
  const id = match.params.id;
  const { data } = useQuery(GET_NOTE, { variables: { id } });

  return (
    <div className="max-w-7xl px-4 mx-auto mt-8">
      <NoteItem note={data.note} />
    </div>
  );
};

export default memo(Note);
