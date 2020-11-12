const { gql } = require('apollo-server') // install Apollo GraphQL extention for syntax highlighting

const typeDefs = gql`
#/* ---------------------- TYPES --------------------- */
type Course {
    course_id: Int
    course_code: String
    #name: String
    course_description: String
    #prereqs: [Course]
    #credits: Int
    #program: Program
    required: String
    category: String 
    sub_category: String 
    instruction_type: String 
    #seasonOffered: String
    #dateAdded: String
    #dateUpdated: [String]
  }
  type Program {
    program_id: Int
    program_code: String 
    program_name: String 
    program_description: String
    program_credits: Int
    #advisors: [User]
    #students: [User]
    #academicPlans: [AcademicPlan]
  }
  type AcademicPlan {
    id: Int
    name: String
    program: Program
    #student: User
    terms: [Term]
    #dateAdded: String
    #dateUpdated: [String]
  }
  type Term {
    term_id: Int
    season: String
    class_level: String
    #dateAdded: String!
    #dateUpdated: [String]
  }
 
  #/* ---------------------- QUERIES --------------------- */
  type Query {
    courses: [Course]
    course(id: Int!): [Course]
    programs: [Program]
    program(id: Int, code: String): Program
    terms: [Term]
    term(id: Int!): Term
  }

  #/* ---------------------- MUTATIONS --------------------- */  
type Mutation {
  createCourse(course_code: String, course_description: String, instruction_type: String): Course
  deleteCourse(course_id: Int): Course
  updateCourse(course_id: Int, instruction_type: String, category: String, course_code: String, required: Int): Course

  createProgram(program_code: String, program_name: String, program_description: String, program_credits: Int): Program

  createTerm(season: String): Term
}
`
module.exports = typeDefs