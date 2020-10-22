// using apollo for graphql server instead of express and graphql-express, see -> https://www.apollographql.com
const { ApolloServer } = require('apollo-server'); 
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// creating server and passing in our type definitions from schema file
const server = new ApolloServer({ typeDefs, resolvers, playground: true, introspection: true });

// server listen
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });

  //anders test 1022