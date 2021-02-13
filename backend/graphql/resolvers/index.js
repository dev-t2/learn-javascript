const { GraphQLDateTime } = require('graphql-iso-date');

const User = require('./user');
const Note = require('./note');
const Query = require('./query');
const Mutation = require('./mutation');

module.exports = { User, Note, Query, Mutation, DateTime: GraphQLDateTime };
