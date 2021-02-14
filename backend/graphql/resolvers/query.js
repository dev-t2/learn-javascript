module.exports = {
  users: async (parent, args, { models, user }) => {
    if (!user) throw new AuthenticationError('You must be signed in to search users');

    try {
      return await models.User.find().limit(100);
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
      return await models.Note.find().limit(100);
    } catch (e) {
      console.error(e);

      throw new Error(e);
    }
  },

  note: async (parent, { id }, { models }) => {
    // if (!user) throw new AuthenticationError('You must be signed in to search note');

    try {
      return await models.Note.findById(id);
    } catch (e) {
      console.error(e);

      throw new Error(e);
    }
  },

  noteFeed: async (parent, { cursor, limit = 10 }, { models }) => {
    let isNextPage = false;
    let cursorQuery = {};

    if (cursor) {
      cursorQuery = { _id: { $lt: cursor } };
    }

    try {
      let notes = await models.Note.find(cursorQuery)
        .sort({ _id: -1 })
        .limit(limit + 1);

      if (notes.length > limit) {
        isNextPage = true;
        notes = notes.slice(0, -1);
      }

      const newCursor = notes[notes.length - 1]._id;

      return {
        notes,
        cursor: newCursor,
        isNextPage,
      };
    } catch (e) {
      console.error(e);

      throw new Error(e);
    }
  },
};
