const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    //destinatario
    to: [{
        type: String,
        required: true
    }],
    //remitente
    from: {
        type: String,
        required: true
    },
    //fecha de creacion
    date: {
        type: Date,
        default: Date.now
    },
    //contenido
    content: String,
    //titulo de contenido
    subject: String

})

// messageSchema.index({ content: 1, subject: 1 }, { required: true });

const messageModel = mongoose.model('message', messageSchema)

module.exports = messageModel