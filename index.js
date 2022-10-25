const express = require('express')
const app = express()
const port = 5000
// const cors = require('cors')

// app.use(cors())

const course = require('./Data/Catagories.json')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/course', (req, res) =>{
    res.send(course)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})