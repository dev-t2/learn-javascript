module.exports = {
  notes: async (user, args, { models }) => {
    try {
      return await models.Note.find({ author: user._id }).sort({ _id: -1 });
    } catch (e) {
      console.error(e);

      throw new Error(e);
    }
  },

  likes: async (user, args, { models }) => {
    try {
      return await models.Note.find({ likedBy: user._id }).sort({ _id: -1 });
    } catch (e) {
      console.error(e);

      throw new Error(e);
    }
  },
};
