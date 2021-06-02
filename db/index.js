const mongoose = require('mongoose')

mongoose
    .connect('mongodb://achyutjjj:abcde@cluster0-shard-00-00.yk9zd.mongodb.net:27017,cluster0-shard-00-01.yk9zd.mongodb.net:27017,cluster0-shard-00-02.yk9zd.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-3nab45-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
