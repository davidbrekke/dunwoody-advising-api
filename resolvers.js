
// function to query mysql server (sql for query, context)
const QUERY = (sql, parent, args, context, info) => {
    return new Promise((resolve, reject) => {
        context.db.query(sql, (err, results) => {
            if (err) reject(err);
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
            return QUERY('select * from COURSE_TBL;', parent, args, context, info);
        },
        // get course 
        async course(parent, args, context, info) {
            console.log('🔎 QUERY: course')
            //console.log( await QUERY(`select * from COURSE_TBL where course_id=${args.id}`, parent, args, context, info)[0])
            return QUERY(`select * from COURSE_TBL where course_id=${args.id}`, parent, args, context, info);
        },
    },
};

module.exports = resolvers;