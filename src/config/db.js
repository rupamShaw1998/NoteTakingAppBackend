const mongoose = require("mongoose");

require('dotenv').config();

const URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Note_Taker";

const connect = mongoose
  .connect(URI)
  .then(() => console.log("DB connected Successfully"))
  .catch((err) => {
    console.error(err);
  });

module.exports = connect;
