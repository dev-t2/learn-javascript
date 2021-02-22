const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const { gravatar } = require('../../lib');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { AuthenticationError, ForbiddenError } = require('apollo-server-express');

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

      throw new Error(e);
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

      throw new Error(e);
    }
  },

  createNote: async (parent, { content }, { models, user }) => {
    console.log(user);

    if (!user) throw new AuthenticationError('You must be signed in to create a note');

    try {
      return await models.Note.create({ content, author: mongoose.Types.ObjectId(user.id) });
    } catch (e) {
      console.error(e);

      throw new Error(e);
    }
  },

  updateNote: async (parent, { id, content }, { models, user }) => {
    if (!user) throw new AuthenticationError('You must be signed in to update a note');

    try {
      const note = await models.Note.findById(id);

      if (!note || String(note.author) !== user.id) {
        throw new ForbiddenError('You do not have permission to update the note');
      }

      return await models.Note.findOneAndUpdate({ _id: id }, { $set: { content } }, { new: true });
    } catch (e) {
      console.error(e);

      throw new Error(e);
    }
  },

  deleteNote: async (parent, { id }, { models, user }) => {
    if (!user) throw new AuthenticationError('You must be signed in to delete a note');

    try {
      const note = await models.Note.findById(id);

      if (!note || String(note.author) !== user.id) {
        throw new ForbiddenError('You do not have permission to delete the note');
      }

      const removedNote = await note.remove();

      return !!removedNote;
    } catch (e) {
      console.error(e);

      throw new Error(e);
    }
  },

  toggleLike: async (parent, { id }, { models, user }) => {
    if (!user) throw new AuthenticationError('You must be signed in to like a note');

    try {
      const note = await models.Note.findById(id);
      const isUser = note.likedBy.indexOf(user.id);

      if (isUser >= 0) {
        return await models.Note.findByIdAndUpdate(
          id,
          { $pull: { likedBy: mongoose.Types.ObjectId(user.id) }, $inc: { likeCount: -1 } },
          { new: true }
        );
      } else {
        return await models.Note.findByIdAndUpdate(
          id,
          { $push: { likedBy: mongoose.Types.ObjectId(user.id) }, $inc: { likeCount: 1 } },
          { new: true }
        );
      }
    } catch (e) {
      console.error(e);

      throw new Error(e);
    }
  },
};
