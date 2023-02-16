const express = require('express')
const session = require('express-session')
const app = express()
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

require('dotenv').config()

module.exports = prisma

app.use(express.json())

app.use(session({
    store: new (require('connect-pg-simple')(session))({
        conString: process.env.DATABASE_URL,
        createTableIfMissing: true
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

// セッションに学生IDがあって、そのIDのStudentが存在する場合は次に進める
// それ以外は {"status": 1} を返す
const checkAuth = async (req, res, next) => {
    const {student_id} = req.session
    if (student_id) {
        const student = await prisma.student.findFirst({
            where: {
                id: student_id
            }
        })
        if (student) {
            return next()
        }
    }
    return res.json({status: 1})
}

const userRouter = require('./routes/user')
const absencesRouter = require('./routes/absences')

app.use(userRouter)
app.use('/absences', checkAuth, absencesRouter)

app.listen(3000, () => console.log('listening on 3000'))