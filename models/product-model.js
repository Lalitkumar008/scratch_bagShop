const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  discountPrice: {
    type: Number,
    default: 0,
  },
  bgColor: {
    type: String,
  },
  panelColor: {
    type: String,
  },
  textColor: {
    type: String,
  },
  picture: String,
});
module.exports = mongoose.model("product", productSchema);
