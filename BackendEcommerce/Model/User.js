
const mongoose = require("mongoose");

const bycrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['admin', 'seller', 'buyer'],
    default: 'buyer'
  }
});




userSchema.pre('save', async function(next) {
  if(!this.isModified('password')) return next();

  const salt = await bycrypt.genSalt(5);

  this.password = await bycrypt.hash(this.password, salt);
  next();

})
const Register = mongoose.model("Registers", userSchema);

module.exports = Register;