const { Schema, model } = require('mongoose');
const slugify = require('slugify');

const options = {
  toJSON: { virtuals: true },
  toObejct: { virtuals: true },
};

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'The title field cannot be empty!'],
      maxLength: [100, 'A title should not contain more than 100 characters!'],
      unique: true,
    },
    // author: {
    //   type: Schema.ObjectId,
    //   ref: 'User',
    //   required: [true, 'A post must be created by admin or content-creator'],
    // },
    paragraphs: [{ type: Schema.ObjectId, ref: 'Paragraph' }],
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    slug: {
      type: String,
      unique: true,
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
  },
  options
);

postSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });

  next();
});

const Post = model('Post', postSchema);

module.exports = Post;
