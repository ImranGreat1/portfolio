const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema/index');

const app = express();

// Allow access from other urls (cross site requests)
app.use(cors());

// Configure Graphql
const server = new ApolloServer({ typeDefs, resolvers, playground: true });

// Start graphql server
server.start().then(() => {
  server.applyMiddleware({ app });
});

module.exports = app;
