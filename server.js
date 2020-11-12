const { ApolloServer } = require('apollo-server') // graphql server object
const typeDefs = require('./schema') // data schema 
const resolvers = require('./resolvers') // resolver functions
const mysql = require('mysql') // mysql database
require('dotenv').config(); // loading environment variables

// mysql db connection
const db = mysql.createConnection({
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: process.env.db
  })
  // connect to database
db.connect((err) => { if (err) { throw err; } console.log('📊 Connected to database!!')})

// creating server and passing in our typedefs, resolvers, mysql as context, auth as context
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: async () => ({
    db: db
  })
})

// initiate server
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})