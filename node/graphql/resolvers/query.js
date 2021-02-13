module.exports = {
  users: async (parent, args, { models, user }) => {
    if (!user) throw new AuthenticationError('You must be signed in to search users');

    try {
      return await models.User.find();
    } catch (e) {
      console.error(e);
    }
  },

  user: async (parent, { nickname }, { models, user }) => {
    if (!user) throw new AuthenticationError('You must be signed in to search user');

    try {
      return await models.User.findOne({ nickname });
    } catch (e) {
      console.error(e);
    }
  },

  notes: async (parent, args, { models, user }) => {
    if (!user) throw new AuthenticationError('You must be signed in to search notes');

    try {
      return await models.Note.find();
    } catch (e) {
      console.error(e);

      throw new Error(e);
    }
  },

  note: async (parent, { id }, { models }) => {
    if (!user) throw new AuthenticationError('You must be signed in to search note');

    try {
      return await models.Note.findById(id);
    } catch (e) {
      console.error(e);

      throw new Error(e);
    }
  },
};
