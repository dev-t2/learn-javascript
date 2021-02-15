import { memo, useCallback } from 'react';
import { gql, useQuery } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';

const GET_NOTES = gql`
  query noteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
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
      cursor
      isNextPage
    }
  }
`;

const HomePage = () => {
  const { data, loading, fetchMore } = useQuery(GET_NOTES);

  // const onClickMore = useCallback(
  //   () =>
  //     fetchMore({
  //       variables: { cursor: data.noteFeed.cursor },
  //       updateQuery: (previousResult, { fetchMoreResult }) => {
  //         return {
  //           noteFeed: {
  //             notes: [...previousResult.noteFeed.notes, ...fetchMoreResult.noteFeed.notes],
  //             cursor: fetchMoreResult.noteFeed.cursor,
  //             isNextPage: fetchMoreResult.noteFeed.isNextPage,
  //             __typename: 'noteFeed',
  //           },
  //         };
  //       },
  //     }),

  //   [fetchMore, data?.noteFeed?.cursor]
  // );

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {/* <NoteFeed notes={data.noteFeed.notes} /> */}

      {/* {data.noteFeed.isNextPage && (
        <button className="button" onClick={onClickMore}>
          VIEW MORE
        </button>
      )} */}
    </>
  );
};

export default memo(HomePage);
