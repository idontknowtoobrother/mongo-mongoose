const mongoose = require('mongoose');
const { Schema } = mongoose
const buildingSchema = Schema({
    name: String,
    floor: {type: Number, default: 2},
    rooms: [{
        type: Schema.Types.ObjectId,
        ref: 'Room',
        default: []
    }]
})

module.exports = mongoose.model('Building', buildingSchema)
