const express = require('express')
require('dotenv').config();
const DB_connection = require("./db/db_connection")
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

try {
    await DB_connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})