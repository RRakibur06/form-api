const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    sector: { type: String, required: true, unique: false  },
    agreeToTerms: { type: Boolean, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);