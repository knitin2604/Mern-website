const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({      //multiple schema in single file
  product: {
    type: ObjectId,
    ref: "Product"     //since productschema is depend on the product  schema we have created
  },
  name: String,    //these are the things that we want to see in the cart 
  count: Number,
  price: Number
});

const ProductCart = mongoose.model("ProductCart", ProductCartSchema);

const OrderSchema = new mongoose.Schema(
  {
    products: [ProductCartSchema],  // to define properties further of cart schema
    transaction_id: {},
    amount: { type: Number },
    address: String,
    status : {
      type: String,
      default: "Recieved",
      enum : ["Cancelled", "Delivered","Shipped", "Processing","Recieved"]
    },
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order, ProductCart };
