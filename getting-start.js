const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/example')

const kittySchema = new mongoose.Schema({
    name: String
})

const Kitten = mongoose.Model('Kitten', kittySchema)
