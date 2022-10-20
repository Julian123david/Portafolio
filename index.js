const express = require('express')
const app = express()
const port = 3000


const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine','ejs')
app.set('views', __dirname+'/views')

app.get('/', (req, res) => {
  //res.send('Pagina principal')
  console.log(__dirname)
  res.render('index')
})

app.get('/educacion', (req, res) => {
  res.render('educacion',{
    titulo: "Sección Educación",
    descripcion: "Aqui encontraras mi formación académica"
  })
})

app.get('/laboral', (req, res) => {
  res.render('laboral')
})

app.get('/habilidades', (req, res) => {
  res.render('Habilidades')
})

app.get('/perfil', (req, res) => {
  res.render('perfil')
})

app.get('/contacto', (req, res) => {
  res.render('Contacto')
})

app.use((req, res,next)=>{
  res.status(404).sendFile(__dirname+'/public/404.html')
})

app.listen(port, () => {
console.log(`Acceda al servidor haciendo clik aqui http://localhost:${port}`)
})