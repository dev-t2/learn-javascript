const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const { gravatar } = require('../../lib');
const jwt = require('jsonwebtoken');

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  signUp: async (parent, { nickname, email, password }, { User }) => {
    email = email.trim();
    password = await bcrypt.hash(password, 10);

    const avatar = gravatar(email);

    try {
      const user = await User.create({ nickname, email, password, avatar });

      return jwt.sign({ id: user._id }, JWT_SECRET);
    } catch (e) {
      console.error(e);
    }
  },

  createNote: async (parent, { content }, { Note }) => {
    try {
      return await Note.create({ content, author: 'T2' });
    } catch (e) {
      console.error(e);
    }
  },

  updateNote: async (parent, { id, content }, { Note }) => {
    try {
      return await Note.findOneAndUpdate({ _id: id }, { $set: { content } }, { new: true });
    } catch (e) {
      console.error(e);
    }
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
