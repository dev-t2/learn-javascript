import { memo } from 'react';
import { useQuery } from '@apollo/client';

import { GET_NOTE } from '../apollo/query';
import Note from '../components/Note';

const NotePage = ({ match }) => {
  const id = match.params.id;
  const { loading, data } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <div>Loading...</div>;

  return <Note note={data.note} />;
};

export default memo(NotePage);
