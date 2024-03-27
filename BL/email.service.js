//bussiness logic for email
const emailController = require('../DL/controllers/email.controller')
const messageController = require('../DL/controllers/message.controller')
const userController = require('../DL/controllers/user.controller')




async function getAllRecieved(userId) {
        const filter={
                _id:userId,
                isActive:true,
                emails:{ $elemMatch: {isRecieved:true } 
        }}
        return await userController.readOne(filter,'emails.email')
}





// async function getAllRecievedMessages(userId) {
//         const filter={
//                 _id:userId,
//                 isActive:true,
//                 emails:{ $elemMatch: {isRecieved:true } 
//         }}
//         return await userController.readOne(filter,'emails.email')
// }




async function getAllReciviedMessages(userId){
        return await emailModel.find(filter).populate({
                path: 'emails.email',
                populate: {
                path: 'msg',
                options: { sort: { _id: -1 }, limit: 1 }
                }
                })
                
}

async function getAllRecieved(userId) {
        const filter={
                _id:userId,
                isActive:true,
                emails:{ $elemMatch: {isRecieved:true } 
        }}
        return await userController.readOne(filter,'emails.email')
}



async function addNewMessageToEmail(emailId, msg) {
        let msgDB = await messageController.create(msg)
        let email = await emailController.readOne({ _id: emailId })
        email.msg.push(msgDB._id)
        return await email.save()
}





//funcion para mandar emails



module.exports = { getAllRecieved,addNewMessageToEmail,getAllReciviedMessages }


