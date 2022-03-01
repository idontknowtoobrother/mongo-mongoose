const mongoose = require('mongoose')
const Building = require('./models/Building')
const Room = require('./models/Room')
mongoose.connect('mongodb://localhost:27017/example')

async function main (){
    const room = await Room.findById('6216116555816c4f9cec8033')
    room.capacity = 20
    room.save()
    console.log (room)

    // test find
    const room = await Room.findOne({ capacity: { $gte: 100 } }).populate('building')
    console.log(room)
    const rooms = await Room.find({ capacity: { $gte: 100 } }).populate('building')
    console.log(rooms)
    const buildings = await Building.find({})
    console.log(JSON.stringify(buildings))
}

main().then( () => {
  console.log('Finish')
})