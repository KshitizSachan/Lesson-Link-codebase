const mongoose = require('mongoose')
const { Schema } = mongoose

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    registrationNumber: {
        type: String
    },
    department: {
        type: String
    },
    dob: {
        type: String
    },
    joiningYear: {
        type: String
    },
    avatar: {
        type: String
    },
    contactNumber: {
        type: Number
    }
}, { strict: false }) 
//The strict option makes it possible to ensure that values added to our
// model instance that were not specified in our schema do not get saved to the db.
//By default its false

module.exports = mongoose.model('admin', adminSchema)
