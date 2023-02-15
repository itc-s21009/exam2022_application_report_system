const express = require('express')
const app = express()
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = prisma

app.use(express.json())

const userRouter = require('./routes/user')

app.use(userRouter)

app.listen(3000, () => console.log('listening on 3000'))