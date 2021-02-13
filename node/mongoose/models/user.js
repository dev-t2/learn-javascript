const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    nickname: {
      type: String,
      require: true,
      index: { unique: true },
    },
    email: {
      type: String,
      require: true,
      index: { unique: true },
    },
    password: {
      type: String,
      require: true,
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
