const express = require('express')
const hbs = require('hbs');
require('dotenv').config()

const app = express()
const port = process.env.PORT

// Handlebars
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials');

// Servir conteniod estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre:'Amaru Villasante',
    titulo: 'Curso de node'
  })
})
app.get('/generic', (req, res) => {
  res.render('generic')
})
app.get('/elements', (req, res) => {
  res.render('elements')
})



// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html')
// })

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html')
// })

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html')
// })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})