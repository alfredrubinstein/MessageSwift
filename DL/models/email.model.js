const mongoose = require('mongoose')
require('./message.model')



//titulo
const emailSchema = new mongoose.Schema({
    subject: {
        type: String
    },
//union a mensaje ,para usarlo con populate
    msg: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'message'
    }],
//fecha de actualizacion, para seguir un orden
    lastDate: {
        type: Date
    },
    
})

const emailModel = mongoose.model('email', emailSchema)

module.exports = emailModel