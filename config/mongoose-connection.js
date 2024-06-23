const mongoose = require("mongoose");
const config = require("config");
// consfig will get URL value from develoepment or production depending on whcih phase we are working on
mongoose
  .connect(`${config.get("MONGODB_URI")}scratch`)
  .then(() => {
    console.log("connected to mdb database");
  })
  .catch((err) => console.log(err));
module.exports = mongoose.connection;
