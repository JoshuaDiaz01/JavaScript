

const mongoose = require('mongoose');

//add all attributes here
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, ` is required.`],
        minLength: [3, ` must be at least {MINLENGTH} characters.`],

    },

    type: {
        type: String,
        required: [true, ` is required.`],
        minLength: [3, ` must be at least {MINLENGTH} characters.`],
    }, 

    description: {
        type: String,
        required: [true, ` is required.`],
        minLength: [3, ` must be at least {MINLENGTH} characters.`],
    }, 
//skills shouldnt be required 
    skillOne: {
        type: String,
        required: [false],
        minLength: [3, ` must be at least {MINLENGTH} characters.`],
    },

    skillTwo: {
        type: String,
        required: [false],
        minLength: [3, ` must be at least {MINLENGTH} characters.`],
    },

    skillThree: {
        type: String,
        required: [false],
        minLength: [3, ` must be at least {MINLENGTH} characters.`],
    },

},
{timestamps: true}
)

const Pet = mongoose.model('Pet', PetSchema)
module.exports = {Pet: Pet}