const express = require('express')
var { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const server = express() // initialize server

// express-graphql middleware
server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }))

const PORT = 4000 || process.env.PORT // setting port to 4000 or 'PORT' envirmonment var (use in prod)
server.listen(PORT, () => console.log(`listening on http://localhost:${PORT}/graphql`)) 