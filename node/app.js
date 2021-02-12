import express from 'express';
import ase from 'apollo-server-express';

let notes = [
  { id: '1', content: 'This is a note 1', author: 'T2' },
  { id: '2', content: 'This is a note 2', author: 'T3' },
  { id: '3', content: 'This is a note 3', author: 'T4' },
];

const { ApolloServer, gql } = ase;

const typeDefs = gql`
  type Note {
    id: ID!
    content: String!
    author: String!
  }

  type Query {
    notes: [Note!]!
    note(id: ID!): Note!
  }

  type Mutation {
    note(content: String!): Note!
  }
`;

const resolvers = {
  Query: {
    notes: () => notes,
    note: (_, { id }) => notes.find((note) => note.id === id),
  },
  Mutation: {
    note: (_, { content }) => {
      const newNote = {
        id: String(notes.length + 1),
        content,
        author: `T${notes.length + 1}`,
      };

      notes.push(newNote);

      return newNote;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
const port = process.env.PORT || 4000;

server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () =>
  console.log(`http://localhost:${port}${server.graphqlPath} 에서 서버 실행 중...`)
);
