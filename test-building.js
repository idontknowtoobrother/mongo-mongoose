const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/example')

const Room = require('./models/Room')
const Building = require('./models/Building')


async function main(){
    const informaticsBuilding = new Building({name: 'Informatics', floor: 11})
    const room3c01 = new Room({ name: '3c01', capacity: 200, floor: 3, building: informaticsBuilding})
    informaticsBuilding.rooms.push(room3c01)
    informaticsBuilding.save().then(()=>{
        console.log('"Informatics" Building saved !')
    })
    room3c01.save().then(()=>{
        console.log('"3C01" Room saved !')
    })
}


main().then(()=>{
    console.log('Successfully :D')
})