const mongoose = require('mongoose');

const connect = (DB_HOST) => {
  mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('error', (err) => {
    console.error(err);

    process.exit();
  });
};

const disconnect = () => {
  mongoose.connection.close();
};

module.exports = { connect, disconnect };
