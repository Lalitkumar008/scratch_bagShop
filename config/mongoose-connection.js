const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/scratch")
  .then(() => {
    console.log("connected to mdb database");
  })
  .catch((err) => console.log(err));
module.exports = mongoose.connection;
