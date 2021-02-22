const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DateTime

  type User {
    id: ID!
    nickname: String!
    email: String!
    avatar: String!
    notes: [Note!]
    likes: [Note!]
  }

  type Note {
    id: ID!
    content: String!
    author: User!
    likeCount: Int
    likedBy: [User]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type NoteFeed {
    notes: [Note!]
    cursor: String!
    isNextPage: Boolean!
  }

  type Query {
    users: [User!]
    user(nickname: String!): User
    me: User!

    notes: [Note!]
    note(id: ID!): Note
    noteFeed(cursor: String, limit: Int): NoteFeed!
  }

  type Mutation {
    signUp(nickname: String!, email: String!, password: String!): String!
    signIn(email: String!, password: String!): String!

    createNote(content: String!): Note!
    updateNote(id: ID!, content: String!): Note
    deleteNote(id: ID!): Boolean!

    toggleLike(id: ID!): Note
  }
`;
