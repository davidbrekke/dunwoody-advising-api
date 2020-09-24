const { gql } = require('apollo-server'); // install Apollo GraphQL extention for syntax highlighting

const typeDefs = gql`
# TYPES
type Course {
    id: ID!
    code: String! # ex: SENG3210
    name: String! # ex: Software Architecture
    description: String!
    prereqs: [Course]
    credits: Int!
    program: Program
    required: Boolean!
    instructors: [String]    
    category: String! # {arts & science, technical}
    subCategory: String # {humanities, social science, math...}
    instructionType: [String] # {lecture, lab, studio}
  }
  type Program {
    id: ID!
    code: String! # SENG
    name: String! # software engineering
    description: String
    credits: Int!
    advisors: [User]
    students: [User]
    academicPlans: [AcademicPlan]
  }
  type AcademicPlan {
    id: ID!
    name: String!
    program: Program!
    student: User
    terms: [Term]!
    approvalStatus: String! # {n/a, notApproved, pending, approved}
  }
  type User {
    id: ID!
    first_name: String
    last_name: String
    email: String!
    password: String!
    role: RoleType!
  }
  enum RoleType {
    Admin
    Student
    Advisor
  }
  type Student {
    advisor: Advisor
    academicPlans: [AcademicPlan]
    program: Program
  }
  type Advisor {
    students: [Student]
    program: Program
  }
  type Term {
    id: ID!
    season: String!
    year: String!
    courses: [Course]!
    credits: Int
  }
 

  # QUERIES
  type Query {
    courses: [Course]
    course(id: ID!): Course
    programs: [Program]
    academicPlans: [AcademicPlan]
  }
`;

module.exports = typeDefs;