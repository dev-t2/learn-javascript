const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const { gravatar } = require('../../lib');
const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  signUp: async (parent, { nickname, email, password }, { models }) => {
    email = email.trim();
    password = await bcrypt.hash(password, 10);

    const avatar = gravatar(email);

    try {
      const user = await models.User.create({ nickname, email, password, avatar });

      return jwt.sign({ id: user._id }, JWT_SECRET);
    } catch (e) {
      console.error(e);

      throw new Error('Internal signup error');
    }
  },

  signIn: async (parent, { email, password }, { models }) => {
    email = email.trim();

    try {
      const user = await models.User.findOne({ email });

      if (!user) throw new AuthenticationError('Could not find users for the email entered');

      const isPassword = await bcrypt.compare(password, user.password);

      if (!isPassword) throw new AuthenticationError('The password entered is incorrect');

      return jwt.sign({ id: user._id }, JWT_SECRET);
    } catch (e) {
      console.error(e);

      throw new Error('Internal signin error');
    }
  },

  createNote: async (parent, { content }, { models }) => {
    try {
      return await models.Note.create({ content, author: 'T2' });
    } catch (e) {
      console.error(e);

      throw new Error('Internal create note error');
    }
  },

  updateNote: async (parent, { id, content }, { models }) => {
    try {
      return await models.Note.findOneAndUpdate({ _id: id }, { $set: { content } }, { new: true });
    } catch (e) {
      console.error(e);

      throw new Error('Internal update note error');
    }
  },

  deleteNote: async (parent, { id }, { models }) => {
    try {
      const deletedNote = await models.Note.findOneAndRemove({ _id: id });

      return !!deletedNote;
    } catch (e) {
      console.error(e);

      throw new Error('Internal delete note error');
    }
  },
};
