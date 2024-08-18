const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const contactrouter = require('./Routes/Contact')

const app = express()

const port = 5000

app.use(express.json())
app.use('/api/contact',contactrouter)

ConnectDB()







app.listen(port, console.log('server is running on port 5000'))