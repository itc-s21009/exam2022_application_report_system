const express = require('express')
const router = express.Router()
const prisma = require('../index')

router.get('/', async (req, res) => {
    const absences = await prisma.absence.findMany()
    res.json(absences)
})

module.exports = router