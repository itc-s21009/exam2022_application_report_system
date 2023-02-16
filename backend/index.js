const express = require('express')
const session = require('express-session')
const app = express()
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

require('dotenv').config()

module.exports = prisma

app.use(express.json())

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

const userRouter = require('./routes/user')
const absencesRouter = require('./routes/absences')

app.use(userRouter)
app.use('/absences', absencesRouter)

app.listen(3000, () => console.log('listening on 3000'))