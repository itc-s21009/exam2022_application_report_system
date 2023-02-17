const express = require('express')
const router = express.Router()
const prisma = require('../index')

router.get('/', async (req, res) => {
    const absences = await prisma.absence.findMany()
    res.json(absences)
})

router.post('/add', async (req, res) => {
    const {kind, reason, start_date, end_date} = req.body
    const student = res.locals.student
    await prisma.absence.create({
        data: {
            student_id: student.id,
            kind: kind,
            reason: reason,
            start_date: new Date(start_date),
            end_date: end_date ? new Date(end_date) : new Date(start_date)
        }
    }).then(() => {
        return res.json({status: 0})
    }).catch(() => {
        return res.json({status: 1})
    })
})

module.exports = router