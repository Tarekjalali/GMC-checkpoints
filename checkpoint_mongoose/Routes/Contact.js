const express = require ('express')
const Contact = require('../Models/Contact')
const { addContact, getAllContacts, getOneContact, deleteContact, updateContact } = require('../Controllers/Contact')

const contactrouter = express.Router()

contactrouter.post('/addcontact', addContact)


contactrouter.get('/getcontact', getAllContacts)

contactrouter.get('/getonecontact/:id', getOneContact)


    contactrouter.get('/delete/:id', deleteContact)
    
    contactrouter.put('/update/:id', updateContact)
        
    


module.exports = contactrouter
