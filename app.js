const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/contact', (req, res) => {
    res.send('Contáctanos')
})

app.get('/products', (req, res) => {
    res.send('Productos')
})

app.get('/products/abc123', (req, res) => {
    res.send('Producto abc123')
})

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})