// function to query mysql server (sql for query, context)
const QUERY = (sql, parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        context.db.query(sql, (err, results) => {
            if (err) reject(err)
            resolve(results)
    })
})
}

const resolvers = {
        /* ---------------------- QUERIES --------------------- */
    Query: {
        // get all courses
        async courses(parent, args, context, info) {
            console.log('🔎 QUERY: courses')
            return QUERY('select * from COURSE_TBL;', parent, args, context, info)
        },
        // get course 
        async course(parent, args, context, info) {
            console.log('🔎 QUERY: course')
            return QUERY(`select * from COURSE_TBL where course_id=${args.id}`, parent, args, context, info)
        },
        // get all programs
        async programs(parent, args, context, info) {
            console.log('🔎 QUERY: programs')
            return QUERY('select * from PROGRAM_TBL;', parent, args, context, info)
        },
        // get all terms
        async terms(parent, args, context, info) {
            console.log('🔎 QUERY: terms')
            return QUERY('select * from TERM_TBL;', parent, args, context, info)
        },
    },
    Mutation: {
        // add course
        createCourse: async (parent, args, context, info) => {
            console.log('📝 MUTATION: createCourse')
            return QUERY(
                        `insert into COURSE_TBL 
                                    (course_code, course_description, instruction_type) 
                                    values 
                                    ('${args.course_code}',
                                     '${args.course_description}',
                                     '${args.instruction_type}')`,
                                     parent, args, context, info
            )
        },
        // delete course
        deleteCourse: async (parent, args, context, info) => {
            console.log('❌ MUTATION: deleteCourse')
            return QUERY(`delete from COURSE_TBL
                                        where course_id='${args.course_id}'`,
                                        parent, args, context, info
            )
        },
    }
}

module.exports = resolvers