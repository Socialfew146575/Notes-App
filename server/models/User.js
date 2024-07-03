const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    requried: true,
  },
  firstName: {
    type: String,
    requried: true,
  },
  lastName: {
    type: String,
    requried: true,
  },
  profileImage: {
    type: String,
    requried: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
