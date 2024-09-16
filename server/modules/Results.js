const mongoose = require("mongoose");

const Results = new mongoose.Schema({
  toatlcol: {
    type: Number,
    required: true,
  },
  HDLCols: {
    type: Number,
    required: true,
  },
  LDLCols: {
    type: Number,
    required: true,
  },
  triglycerides: {
    type: Number,
    required: true,
  },
  VLDL: {
    type: Number,
    required: true,
  },
  NonHDLCols: {
    type: Number,
    required: true,
  },
  CHOLorHDL: {
    type: Number,
    required: true,
  },
  userID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
  },
  createAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
});
const ResultModel = mongoose.model("results", Results);
module.exports = ResultModel;
