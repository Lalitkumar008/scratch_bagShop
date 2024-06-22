const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  fullName: {
    type: String,
  },
  contactNo: {
    type: Number,
  },
  isAdmin: {
    type: Boolean,
  },
  cart: {
    type: Array,
    default: [],
  },
  orders: {
    type: Array,
    default: [],
  },
  picture: String,
});
module.exports = mongoose.model("user", userSchema);
