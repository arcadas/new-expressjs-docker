const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('express api'))

app.listen(port)
