const { gql } = require('apollo-server'); // install Apollo GraphQL extention for syntax highlighting

const typeDefs = gql`
# TYPES
type Course {
    course_id: ID!
    course_code: String # ex: SENG3210
    name: String # ex: Software Architecture
    course_desc: String
    prereqs: [Course]
    credits: Int
    program: Program
    required: Boolean!
    category: String # {arts & science, technical}
    sub_category: String # {humanities, social science, math...}
    instruction_type: [String] # {lecture, lab, studio}
    seasonOffered: String # {spring, summer, fall, all}
    dateAdded: String
    dateUpdated: [String]
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
    dateAdded: String!
    dateUpdated: [String]
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
    dateAdded: String!
    dateUpdated: [String]
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