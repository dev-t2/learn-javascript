const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Note', schema);
