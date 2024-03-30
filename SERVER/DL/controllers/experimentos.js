//AL ENTRAR A INBOX ,AUTOMATICAMENTE...
//devolver todos los titulos y sus id de mensajes entrantes ,de el id de el usuario registrado
//AL NAVEGAR A /ENVIADOS ,AUTOMATICAMENTE...
//devolver todos los titulos y sus id de mensajes enviados ,de el id de el usuario registrado
//AL NAVEGAR A /BORRADOS ,AUTOMATICAMENTE...
//devolver todos los titulos y sus id de mensajes eliminados ,de el id de el usuario registrado
//AL NAVEGAR A /FAVORITOS ,AUTOMATICAMENTE...
//devolver todos los titulos y sus id de mensajes favoritos ,de el id de el usuario registrado

//importe a todos los modelos
const emailModel = require('../models/email.model');
const userModel = require('../models/user.model');
const messageModel = require('../models/message.model');


//FUNCIONES SIN POPULATE--------------------------
//funcion para crear un nuevo email segun el modelo de emailModel
async function create(data) {
    return await emailModel.create(data)
}
//-------------------------------------------------
async function readOne(userId, populateOptions) {
    try {
        console.log('Searching for document in the database...');
        // Get data from the database
        const document = await userModel.findOne(userId);
        console.log('Document found:', document);
        // If document is not found, throw an error
        if (!document) {
            throw new Error('Document not found');
        }

        console.log('Document found. Populating related data...');
        // Populate related data
        if (populateOptions) {
            await document.populate(populateOptions).execPopulate();
        }
        console.log('Data populated successfully.');
        // **Return the document**
        return document;
    } catch (error) {
        // Handle errors and return an informative message to the user
        console.error('Error during search and data population:', error.message);
        throw error;
    }
}

// EXAMPLE OF USING THE findOne FUNCTION WITH userId AND POPULATE
(async () => {
    try {
        console.log('Starting search...');
        const userId = {_id: '6602a6f49937991b9cef6bbd'};
        const populateOptions = ['emails.email', 'emails.msg'];
        const message = await readOne(userId, populateOptions);
        
        // Print the result
        console.log('Document obtained successfully:', message);
        
        // Print a message
        console.log('Process completed successfully.');
    } catch (error) {
        console.error('An error occurred during the process:', error);
    }
})();


//-------------------------------------------------
//funcion para buscar un email por id
async function findById(data) {
    return await emailModel.findById(data) 
}
//EJEMPLO DE USO DE LA FUNCION findById
(async() => {
const email = await emailModel.findById('6602a6f49937991b9cef6bbd');
console.log(email);})()
//-------------------------------------------------
//funcion para buscar un email por id y actualizarlo
async function findByIdAndUpdate(data) {
    return await emailModel.findByIdAndUpdate(data)
}
//funcion para buscar un email por id y eliminarlo
async function findByIdAndDelete(data) {
    return await emailModel.findByIdAndDelete(data) 
}
//FUNCIONES CON POPULATE------------------------------------------------
//funcion para buscar un email por id y hacer populate de el usuario
async function findByIdPopulate(data) {
    return await emailModel.findById(data).populate('user')
}
//funcion para buscar un email por id y hacer populate de el usuario y los mensajes
async function findByIdPopulateMessages(data) {
    return await emailModel.findById(data).populate('user').populate('messages')
}
//funcion para buscar un email por id y hacer populate de el usuario y los mensajes y los usuarios
async function findByIdPopulateMessagesUsers(data) {
    return await emailModel.findById(data).populate('user').populate({path: 'messages', populate: {path: 'user'}})
} 
//funcion para buscar un email por id y hacer populate de el usuario y los mensajes y los usuarios y los emails
async function findByIdPopulateMessagesUsersEmails(data) {
    return await emailModel.findById(data).populate('user').populate({path: 'messages', populate: {path: 'user'}}).populate('emails')
}
//funcion para buscar un email por id y hacer populate de el usuario y los mensajes y los usuarios y los emails y los mensajes
async function findByIdPopulateMessagesUsersEmailsMessages(data) {
    return await emailModel.findById(data).populate('user').populate({path: 'messages', populate: {path: 'user'}}).populate('emails').populate({path: 'messages', populate: {path: 'email'}})
}



