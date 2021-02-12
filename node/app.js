const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const dotenv = require('dotenv');

const { typeDefs, resolvers } = require('./graphql');
const models = require('./mongoose/models');
const mongoose = require('./mongoose');

dotenv.config();

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;

mongoose.connect(DB_HOST);

const server = new ApolloServer({ typeDefs, resolvers, context: () => models });
const app = express();

server.applyMiddleware({ app, path: '/api' });
app.listen({ port: PORT }, () =>
  console.log(`http://localhost:${PORT}${server.graphqlPath} 서버 실행 중...`)
);
