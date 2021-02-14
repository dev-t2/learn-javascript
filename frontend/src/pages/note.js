import { memo } from 'react';
import { gql, useQuery } from '@apollo/client';

import Note from '../components/Note';

const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      content
      author {
        id
        nickname
        avatar
      }
      likeCount
      createdAt
    }
  }
`;

const NotePage = ({ match }) => {
  const id = match.params.id;
  const { loading, data } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <div>Loading...</div>;

  return <Note note={data.note} />;
};

export default memo(NotePage);
