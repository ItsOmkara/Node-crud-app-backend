const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    price: {
      type: Number,
      required: [true, "Please enter product price"],
      min: [0, "Price cannot be negative"],
    },

    quantity: {
      type: Number,
      required: [true, "Please enter product quantity"],
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
