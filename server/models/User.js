const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'A user must provide a first name!'],
  },
  surname: String,
  role: {
    type: String,
    enum: ['admin', 'content-creator', 'user'],
  },
  password: {
    type: String,
    required: [true, 'A user must provide a password!'],
  },
  passwordConfirm: String,
});

const User = model('User', userSchema);

module.exports = User;
