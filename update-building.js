const mongoose = require('mongoose')
const Building = require('./models/Building')
const Room = require('./models/Room')
mongoose.connect('mongodb://localhost:27017/example')
async function main () {
    const newInformaticsBuilding = await Building.findById('6216116555816c4f9cec8032')
    const room = await Room.findById('6216116555816c4f9cec8037')
    const informaticsBuilding = await Building.findById(room.building) 
    console.log(newInformaticsBuilding)
    console.log(room)
    console.log(informaticsBuilding)
    room.building = newInformaticsBuilding
    newInformaticsBuilding.rooms.push(room)
    informaticsBuilding.rooms.pull(room)
    room.save()
    newInformaticsBuilding.save()
    informaticsBuilding.save()
}   
main().then(() => {
    console.log('Finish')
})