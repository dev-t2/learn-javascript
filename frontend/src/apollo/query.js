import { gql } from '@apollo/client';

export const GET_MY_NOTES = gql`
  query me {
    me {
      id
      nickname
      notes {
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
  }
`;

export const GET_MY_LIKES = gql`
  query me {
    me {
      id
      nickname
      likes {
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
  }
`;

export const GET_NOTE = gql`
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

export const GET_EDIT = gql`
  query me {
    me {
      id
      likes {
        id
      }
    }
  }
`;
