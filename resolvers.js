/* 
const courses = [
    {
        id: 1,
        code: 'SENG3210',
        name: 'Software Architecture',
        credits: 3,
        required: true,
        category: 'technical',
        instructionType: ['lecture', 'lab']
    },
    {
        id: 2,
        code: 'SENG3110',
        name: 'Software Design',
        credits: 4,
        required: true,
        category: 'technical',
        instructionType: ['lecture', 'lab']
    },
    {
        id: 3,
        code: 'SENG3300',
        name: 'Data Introduction',
        credits: 3,
        required: true,
        category: 'technical',
        instructionType: ['lecture', 'lab']
    },
    {
        id: 4,
        code: 'SENG3310',
        name: 'Database Systems',
        credits: 4,
        required: true,
        category: 'technical',
        instructionType: ['lecture', 'lab']
    },
]

const programs = [
    {
        id: 1,
        code: 'SENG',
        name: 'Software Engineering',
        credits: 121,
    }
]
const terms = [
    {
        id: 1,
        season: 'fall',
        year: 2020,
        courses: [courses[0], courses[1], courses[2]]
    }
]
const academicPlans = [
    {
        id: 1,
        name: 'Software Engineering',
        program: programs[0],
        approvalStatus: 'n/a',
        terms: [terms[0]]
    }
]
const students = [
    {
        academicPlans: [academicPlans[0]],
        program: programs[0]
    }
]
const users = [
    {
        id: 1,
        first_name: 'David',
        last_name: 'Magnuson',
        email: 'magdavj@dunwoody.edu',
        password: '1234',
        role: students[0]
    }
]
*/

const resolvers = {
    Query: {
        // get all courses
        courses: () => {
            return courses
        },
        // get course 
    },
};

module.exports = resolvers;