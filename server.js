// using apollo for graphql server instead of express and graphql-express, see -> https://www.apollographql.com
const { ApolloServer } = require('apollo-server'); 
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const mysql = require('mysql'); // mysql database
require('dotenv').config(); // loading environment variables

// mysql db connection
    /* the mysql.createConnection function takes in a configuration
        object which contains host, user, password and the database name. */
    /* ---------------------------------------------------------------------------- */
const db = mysql.createConnection({
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: process.env.db
  });
  // connect to database
db.connect((err) => { if (err) { throw err; } console.log('📊 Connected to database!!')});

// creating server and passing in our type definitions from schema file
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: async () => ({
    db: db
  })
});

// start server with listen function
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});