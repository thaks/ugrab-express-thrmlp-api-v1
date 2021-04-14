const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const axios = require('axios')

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json())
app.use(cors())
app.use(helmet())

app.get('/', (req, res) => {
    res.send("Hello")
})

app.get((req, res, next) => {
    res.status(404);
    const error = new Error('ERROR - Page Not Fount')
    next(error)
})

app.listen(port, () => {
    console.log('Server is up and running...')
})