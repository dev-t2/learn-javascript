let notes = [
  { id: '1', content: 'This is a note 1', author: 'T2' },
  { id: '2', content: 'This is a note 2', author: 'T3' },
  { id: '3', content: 'This is a note 3', author: 'T4' },
];

module.exports = {
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
