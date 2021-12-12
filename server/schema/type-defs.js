const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Post type definition
  type Post {
    id: String!
    title: String!
    description: String!
    author: Author!
  }

  # Author type definition
  type Author {
    id: String!
    name: String!
    age: Int
  }

  # Queries
  type Query {
    getAllPosts: [Post]!
    getPost(id: String!): Post
    getAuthor(id: String!): Author
  }

  # Mutations
  type Mutation {
    createPost(title: String!, active: Boolean): Post
  }
`;

module.exports = typeDefs;
