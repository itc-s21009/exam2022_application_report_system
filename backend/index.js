const express = require('express')
const app = express()

app.use(express.json())

app.get('/api', (req, res) => {
    res.json({message: 'hello'})
})

app.post('/api', (req, res) => {
    const {studentCode} = req.body
    console.log(studentCode)
    res.json({studentCode: studentCode})
})

app.listen(3000, () => console.log('listening on 3000'))