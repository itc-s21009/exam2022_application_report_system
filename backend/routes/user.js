const express = require('express')
const router = express.Router()
const prisma = require('../index')

router.post('/register', async (req, res) => {
    const {student_code, student_name} = req.body
    await prisma.student.create({
        data: {
            code: student_code,
            name: student_name
        }
    }).catch(() => res.json({status: 1}))
    res.json({status: 0})
})

router.post('/login', async (req, res) => {
    const {student_code} = req.body
    const student = await prisma.student.findFirst({
        where: {
            code: student_code
        }
    })
    res.json({status: student ? 1 : 0})
})

router.get('/logout', (req, res) => {
    res.json({status: 0})
})

module.exports = router