import { memo } from 'react';
import { gql, useQuery } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';

const GET_NOTES = gql`
  query noteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      isNextPage
      notes {
        id
        createdAt
        content
        likeCount
        author {
          nickname
          id
          avatar
        }
      }
    }
  }
`;

const Home = () => {
  const { data, loading } = useQuery(GET_NOTES);

  if (loading) return <div>Loading...</div>;

  return <NoteFeed notes={data.noteFeed.notes} />;
};

export default memo(Home);
