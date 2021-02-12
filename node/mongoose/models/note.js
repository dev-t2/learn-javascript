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
    timestamp: true,
  }
);

module.exports = mongoose.model('Note', schema);
