const mongoose = require('mongoose')

mongoose.connect(process.env.NOMGODB_URL, {
    useNewUrlParser: true
})