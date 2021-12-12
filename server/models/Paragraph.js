const { Schema, model } = require('mongoose');

const paragraphSchema = new Schema({
  subHeading: {
    type: String,
    maxlength: [
      100,
      'A subheading should not contan more than 100 characters!',
    ],
  },
  text: {
    type: String,
    minlength: [100, 'A paragraph should contain atleast 100 characters'],
    maxlength: [600, 'A paragraph should not contain more than 600 characters'],
    required: [true, 'A paragraph text cannot be empty!'],
  },
  image: {
    description: {
      type: String,
    },
    fileName: String,
  },
  post: {
    type: Schema.ObjectId,
    required: [true, 'A paragraph must be associated to a post'],
  },
  dateCreated: {
    type: Date,
    default: Date.now,
    select: false,
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const Paragraph = model('Paragraph', paragraphSchema);

module.exports = Paragraph;
