const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/example')

const Room = require('./models/Room')
const Building = require('./models/Building')


async function main(){
    const informaticsBuilding = new Building({name: 'Informatics', floor: 11})
    const newInformaticsBuilding = new Building({name: 'New Informatics', floor: 20})
    
    // 3C01, 4C01, 5C01
    const room3c01 = new Room({ name: '3c01', capacity: 200, floor: 3, building: informaticsBuilding})
    const room4c01 = new Room({ name: '4c01', capacity: 200, floor: 4, building: informaticsBuilding})
    const room5c01 = new Room({ name: '5c01', capacity: 200, floor: 5, building: informaticsBuilding})
    
    // Push to building room
    informaticsBuilding.rooms.push(room3c01)
    informaticsBuilding.rooms.push(room4c01)
    informaticsBuilding.rooms.push(room5c01)

    // Save All
    await informaticsBuilding.save()
    await newInformaticsBuilding.save()
    await room3c01.save()
    await room4c01.save()
    await room5c01.save()

}


main().then(()=>{
    console.log('Successfully :D')
})