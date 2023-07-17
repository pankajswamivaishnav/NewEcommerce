const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: [true, "Email is alredy exist"],
    },

    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

// Password match confirmation
userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

// Hashing password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // console.log(`password before bcrypt ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
