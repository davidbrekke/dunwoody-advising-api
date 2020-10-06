const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const resolvers = {
    Query: {
        // get all courses
        async courses(parent, args, context, info) {
            const courses = await prisma.cOURSE_TBL.findMany()
            return courses
        },
        // get single course by id
        async course(parent, args, context, info) {
            const course = await prisma.cOURSE_TBL.findOne({ where: { course_id: args.id}})
            return course
        }
    },
    Mutation: {
        // create a course
        createCourse: async (parent, args, context, info) => {
            const course = await prisma.cOURSE_TBL.create({
                data: {
                    course_code: args.course_code,
                    required: args.required,
                    category: args.category,
                    instruction_type: args.instruction_type
                }
            })
            return course
        },
        // update a course
        updateCourse: async (parent, args, context, info) => {
            const course = await prisma.cOURSE_TBL.update({
                data: {
                    course_code: args.course_code,
                    required: args.required,
                    category: args.category,
                    instruction_type: args.instruction_type
                },
                where: {
                    course_id: args.course_id
                }
            })
            return course
        },
        // delete a course
        deleteCourse: async (parent, args, context, info) => {
            const course = await prisma.cOURSE_TBL.delete({
                where: {
                    course_id: args.course_id
                }
            })
            return course
        }
    }
}

module.exports = resolvers;