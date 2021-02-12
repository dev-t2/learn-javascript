module.exports = {
  note: async (parent, { content }, { Note }) => await Note.create({ content, author: 'T2' }),
};
