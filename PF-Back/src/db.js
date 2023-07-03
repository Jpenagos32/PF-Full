require('dotenv').config()
const { URL_DB } = process.env
const mongoose = require('mongoose')

mongoose.connect(URL_DB)

.then(db => console.log('DB is connected'))
.catch(err => console.error(err))

module.exports = mongoose
