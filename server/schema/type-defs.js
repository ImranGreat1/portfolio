const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Post type definition
  type Post {
    _id: ID!
    title: String!
    description: String!
    author: User!
  }

  # User type definition
  type User {
    _id: ID!
    email: String!
    firstName: String!
    phone: String
    role: String!
    photo: String!
  }

  # Queries
  type Query {
    getAllPosts: [Post]!
    getPost(id: ID!): Post
    getUser(id: ID!): User
  }

  # Mutations
  type Mutation {
    createPost(title: String!, active: Boolean): Post
    createUser(
      email: String!
      firstName: String!
      password: String!
      passwordConfirm: String!
    ): User
  }
`;

module.exports = typeDefs;
