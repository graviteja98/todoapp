const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

todoSchema.pre("save", function () {
  this.when = new Date(this.when);
});

module.exports = mongoose.model("User", userSchema);
