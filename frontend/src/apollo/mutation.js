import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation signUp($nickname: String!, $email: String!, $password: String!) {
    signUp(nickname: $nickname, email: $email, password: $password)
  }
`;

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export const CREATE_NOTE = gql`
  mutation createNote($content: String!) {
    createNote(content: $content) {
      id
      content
      author {
        id
        nickname
      }
      likeCount
      likedBy {
        id
        nickname
      }
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation updateNote($id: ID!, $content: String!) {
    updateNote(id: $id, content: $content) {
      id
      content
      author {
        id
        nickname
      }
      likeCount
      likedBy {
        id
        nickname
      }
      createdAt
    }
  }
`;
