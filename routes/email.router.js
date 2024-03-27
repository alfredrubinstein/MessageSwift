const express = require('express'),
router = express.Router();
const userService = require('../BL/user.service')
const emailService = require('../BL/email.service')
const { auth } = require('../middelewares/auth')

//para devolver todo los mensajes de un usuario especifico segun su id ,pasado con la url
//localhost:8000/email//inbox/6602a6f49937991b9cef6bba
router.get('/inbox/:userId', async (req, res) => {
    try {
//revisar -cambiar de req.params a req.body
let result = await emailService.getAllRecieved(req.params.userId)
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }
})


//para devolver todo los mensajes de un email especifico segun su id ,pasado con la url
//localhost:8000/email//inbox/6602a6f49937991b9cef6bba
router.post('/:emailId', async (req, res) => {
    try {
        //revisar -cambiar de req.params a req.body
        let result = await emailService.addNewMessageToEmail(req.params.emailId, req.body)
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }
})


module.exports = router;