const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const resolvers = {
    /* ---------------------- QUERIES --------------------- */
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
        },
        // get all programs
        async programs(parent, args, context, info) {
            const programs = await prisma.pROGRAM_TBL.findMany()
            return programs
        },
        // get program by program id
        async program(parent, args, context, info) {
            const program = await prisma.pROGRAM_TBL.findOne({ where: { program_id: args.id }})
            return program
        },
        // get terms
        async terms(parent, args, context, info) {
            const terms = await prisma.tERM_TBL.findMany()
            return terms
        },
        // get term by id
        async term(parent, args, context, info) {
            const term = await prisma.tERM_TBL.findOne({ where: {term_id: args.id}})
            return term
        }
    },

    /* ---------------------- MUTATIONS --------------------- */
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
        },

        // create a program
        createProgram: async (parent, args, context, info) => {
            const program = await prisma.pROGRAM_TBL.create({
                data: {
                    program_name: args.program_name,
                    program_code: args.program_code,
                    program_description: args.program_description,
                    program_credits: args.program_credits
                }
            })
            return program
        },

        // create term
        createTerm: async (parent, args, context, info) => {
            const term = await prisma.tERM_TBL.create({
                data: {
                    season: args.season
                }
            })
            return term
        }
    }
}

module.exports = resolvers;