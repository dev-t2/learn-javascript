const { Note } = require('../mongoose/model');

let notes = [
  { id: '1', content: 'This is a note 1', author: 'T2' },
  { id: '2', content: 'This is a note 2', author: 'T3' },
  { id: '3', content: 'This is a note 3', author: 'T4' },
];

module.exports = {
  Query: {
    notes: async () => await Note.find(),
    note: async (_, { id }) => await Note.findById(id),
  },

  Mutation: {
    note: async (_, { content }) => await Note.create({ content, author: 'T2' }),
  },
};
