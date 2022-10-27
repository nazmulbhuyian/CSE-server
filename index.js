const express = require('express')
const app = express()
const port = process.env.PORT ||  5000;
const cors = require('cors')

const course = require('./Data/Catagories.json')
const description = require('./Data/Description.json')
const catagory = require('./Data/Description.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const descriptions = description.filter(n => n.category_id === id);
    res.send(descriptions);
})

// app.get('/catagory/:id', (req, res) =>{
//     const id = req.params.id;
//     const catagorys = catagory.filter(n => n.category_id === id);
//     res.send(catagorys)
// })

app.get('/course', (req, res) =>{
    res.send(course)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})