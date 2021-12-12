const { DUMMY_AUTHORS, DUMMY_POSTS } = require('./dummy-data');
const Post = require('../models/Post');

const resolvers = {
  Query: {
    // Get all posts
    getAllPosts: () => {
      return DUMMY_POSTS.map((post) => {
        const author = DUMMY_AUTHORS.find(
          (author) => author.id === post.authorId
        );
        return { ...post, author };
      });
    },

    //  Get a single post
    getPost: (parent, args, context) => {
      return DUMMY_POSTS.find((post) => post.id === args.id);
    },

    getAuthor: (id) => {
      return DUMMY_AUTHORS.find((author) => author.id === id);
    },
  },

  // Mutations
  Mutation: {
    createPost: async (parent, { title, active }, context) => {
      const data = { title };
      if (active) data.active = active;

      const post = await Post.create(data);

      return post;
    },
  },
};

module.exports = resolvers;
