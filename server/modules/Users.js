const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  NIC: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
