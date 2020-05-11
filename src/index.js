const express = require('express')
require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('./models/task')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})