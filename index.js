const express = require('express')
const app = express()
const port = 5000
// const cors = require('cors')

// app.use(cors())

const course = require('./Data/Catagories.json')
const description = require('./Data/Description.json')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/course', (req, res) =>{
    res.send(course)
})

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const descriptions = description.filter(n => n.category_id === id);
    res.send(descriptions);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})