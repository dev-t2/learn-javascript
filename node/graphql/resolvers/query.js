module.exports = {
  notes: async (parent, args, { Note }) => await Note.find(),
  note: async (parent, { id }, { Note }) => await Note.findById(id),
};
