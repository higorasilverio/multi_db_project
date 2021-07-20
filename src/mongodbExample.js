const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.Promise = global.Promise
mongoose.connect('mongodb://higorsilverio:goodluck9123@localhost:27017/herois'
    , { useNewUrlParser: true }, function (error) {
        if(!error) return;
        console.log('Connection fail!', error)
    })

const connection = mongoose.connection

connection.once('open', () => console.log('Database up'))