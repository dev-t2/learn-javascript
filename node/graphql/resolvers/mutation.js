module.exports = {
  createNote: async (parent, { content }, { Note }) => await Note.create({ content, author: 'T2' }),
  updateNote: async (parent, { id, content }, { Note }) => {
    return await Note.findOneAndUpdate({ _id: id }, { $set: { content } }, { new: true });
  },
  deleteNote: async (parent, { id }, { Note }) => {
    try {
      await Note.findOneAndRemove({ _id: id });

      return true;
    } catch (e) {
      console.error(e);

      return false;
    }
  },
};
