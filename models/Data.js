const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    Data: { type: Array },
  }
);

module.exports = mongoose.model("Data", DataSchema);