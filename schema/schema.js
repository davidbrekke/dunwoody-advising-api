const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema} = require('graphql')

// COURSE TYPE
const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: () => ({
        id: { type: GraphQLString},
        name: { type: GraphQLString},
        description: { type: GraphQLString},
        credits: { type: GraphQLInt}
    })
})

// ROOT QUERY
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: { 
        course: {
            type: CourseType,
            args: { id: { type: GraphQLString }}, // argument to pass into the query
            resolve(parent, args){
                // get data from db/other api etc.
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
// hello test