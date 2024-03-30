//bussiness logic for email
//poner aqui toda las funciones que se necesiten para el manejo de emails
const emailController = require('../DL/controllers/email.controller')
const messageController = require('../DL/controllers/message.controller')
const userController = require('../DL/controllers/user.controller')

//funcion para obtener todos los emails recibidos de un usuario en especifico
//hace uso de la funcion readOne de emailController
async function getAllRecieved(userId) {
        const filter={
                _id:userId,
                isActive:true,
                emails:{ $elemMatch: {isRecieved:true } 
        }}
        return await userController.readOne(filter,'emails.email')
}

//funcion para obtener todos el contenido de un email especifico 🧨
//hace uso de la funcion read de emailController
async function getAllReciviedMessages(userId){
        return await emailModel.find(filter).populate({
                path: 'emails.email',
                populate: {
                path: 'msg',
                options: { sort: { _id: -1 }, limit: 1 }
                }
                })
}

//funcion para agregar un nuevo mensaje a un email especifico (para responder emails)
//hace uso de la funcion create y readOne de messageController y emailController
async function addNewMessageToEmail(emailId, msg) {
        let msgDB = await messageController.create(msg)
        let email = await emailController.readOne({ _id: emailId })
        email.msg.push(msgDB._id)
        return await email.save()
}


//funcion para mandar email nuevo



module.exports = { getAllRecieved,addNewMessageToEmail,getAllReciviedMessages }


