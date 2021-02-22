import { memo } from 'react';
import { useQuery } from '@apollo/client';

import { GET_NOTE } from '../apollo/query';
import NoteItem from '../components/NoteItem';

const NotePage = ({ match }) => {
  const id = match.params.id;
  const { loading, data } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <div>Loading...</div>;

  return <NoteItem note={data.note} />;
};

export default memo(NotePage);
