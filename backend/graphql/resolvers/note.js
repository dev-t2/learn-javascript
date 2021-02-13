module.exports = {
  author: async (note, args, { models }) => {
    try {
      return await models.User.findById(note.author);
    } catch (e) {
      console.error(e);

      throw new Error(e);
    }
  },

  likedBy: async (note, args, { models }) => {
    try {
      return await models.User.find({ _id: { $in: note.likedBy } });
    } catch (e) {
      console.error(e);

      throw new Error(e);
    }
  },
};
