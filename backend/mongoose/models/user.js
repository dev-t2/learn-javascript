const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    nickname: {
      type: String,
      required: true,
      index: { unique: true },
    },
    email: {
      type: String,
      required: true,
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
      index: { unique: true },
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', schema);
