const mongoose = require('mongoose')
require('./message.model')
require('./email.model')

const userSchema = new mongoose.Schema({
    //email de el usuario
    email: {
        type: String,
        unique: true,
        required: true
    },
    //nombre de usuario
    fullName: {
        type: String,
        required: true
    },
    //codigo de el usuario
    password: {
        type: String,
        select: false
    },
    //link a un avatar
    avatar: String,

    //arreglo de objetos email, lo referente a influencias a cada usuario de forma diferente
    emails: [{
        email: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'email'
        },
        isSent: Boolean,//mandado
        isRecieved: Boolean,//recivido
        isFavorite: Boolean,//favorite
        isDeleted: Boolean,//borrado
        isRead: {type:Boolean,default:false},//leido
    }],

    isActive : {
    type: Boolean,//borrado definitivo
    default: true
}
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel