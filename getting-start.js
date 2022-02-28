const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/example')

const kittySchema = new mongoose.Schema({
    name: String
})
kittySchema.methods.speak = function speak() {
    const greet = this.name ? `Meow name is ${this.name}`
        : `I don't have a name`
    console.log(greet)
}

// Collection Kitten
const Kitten = mongoose.model('Kitten', kittySchema)

// Promise
const silence = new Kitten({ name: 'Silence' })
console.log(silence.name)
silence.speak()
silence.save().then(console.log).catch(console.log)

// Callback
const fluffy = new Kitten({ name: 'fluffy' })
fluffy.speak()
fluffy.save((err, res) => {
    console.log(err ? err : res);
})


// Async
saveCat = async (name) => {
    const newCat = new Kitten({ name: name })
    try {
        const result = await newCat.save()
        console.log(result)
        return result
    } catch (e) {
        console.log(e)
    };
}


saveCat('Hex').then(res => {
    console.log(res)
})


// Try by me 'Async'
isEvenNumber = async (num) => {
    return num%2==0
}

isEvenNumber(5).then(console.log)