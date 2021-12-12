const { Schema, model } = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

// Schema validators
const emailValidator = (value) => {
  return validator.isEmail(value);
};
const phoneNumberValidator = (value) => {
  return validator.isMobilePhone(value);
};

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'A user must provide an email'],
    validate: {
      validator: emailValidator,
      message: 'The email you provide is not a valid email',
    },
  },
  phone: {
    type: String,
    validate: {
      validator: phoneNumberValidator,
      message: 'The number you provide is not a valid phone number',
    },
  },
  firstName: {
    type: String,
    required: [true, 'A user must provide a first name!'],
  },
  surname: String,
  role: {
    type: String,
    enum: ['admin', 'content-creator', 'user'],
  },
  photo: { type: String, default: 'default.jpg' },
  password: {
    type: String,
    required: [true, 'A user must provide a password!'],
    minlength: [8, 'Password should not be less than eight characters'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!'],
    validate: {
      /* This only works on CREATE and SAVE, so when we want to update the user's
          password we should use the .save not findOneAndUpdate */
      validator: function (val) {
        return this.password === val;
      },
      message: 'Password did NOT match!',
    },
  },

  passwordResetToken: String,
  passwordResetExpired: Date,
  passwordChangedAt: Date,
});

userSchema.pre('save', async function (next) {
  // Only hash when password is just created or when updating the password.
  if (!this.isModified('password')) return next();
  // Save the new hashed password as the password
  this.password = await bcrypt.hash(this.password, 12);

  // Delete password confirm field
  this.passwordConfirm = undefined;
  next();
});

// DOCUMENT METHOD TO COMPARE ENCRYPTED AND NON-ENCRYPTED PASSWORDS
userSchema.methods.correctPassword = async (
  candidatePassword,
  userEncryptedPassword
) => {
  // can't use this.password because select is set to false on the password field.
  return await bcrypt.compare(candidatePassword, userEncryptedPassword);
};

const User = model('User', userSchema);

module.exports = User;
