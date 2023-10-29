const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartShema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", CartShema);
