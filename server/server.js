const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/schema"); // Create GraphQL schema
const resolvers = require("./graphql/resolvers"); // Create GraphQL resolvers

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

mongoose.connect("mongodb://localhost/your-database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
