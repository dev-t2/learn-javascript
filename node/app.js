// const cors = require('cors');
// const helmet = require('helmet');
const depthLimit = require('graphql-depth-limit');
const { createComplexityLimitRule } = require('graphql-validation-complexity');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const { typeDefs, resolvers } = require('./graphql');
const models = require('./mongoose/models');
const mongoose = require('./mongoose');

dotenv.config();

const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
const DB_HOST = process.env.DB_HOST;

mongoose.connect(DB_HOST);

const getUser = (token) => {
  if (token) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (e) {
      console.error(e);

      throw new Error('The token is not verified');
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,

  validationRules: [depthLimit(4), createComplexityLimitRule(1000)],

  context: ({ req }) => {
    const token = req.headers.authorization;
    const user = getUser(token);

    return { models, user };
  },
});

const app = express();

// app.use(helmet());
// app.use(cors());

server.applyMiddleware({ app, path: '/api' });
app.listen({ port: PORT }, () =>
  console.log(`http://localhost:${PORT}${server.graphqlPath} 서버 실행 중...`)
);
