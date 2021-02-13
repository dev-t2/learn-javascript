module.exports = {
  notes: async (parent, args, { models }) => await models.Note.find(),
  note: async (parent, { id }, { models }) => await models.Note.findById(id),
};
