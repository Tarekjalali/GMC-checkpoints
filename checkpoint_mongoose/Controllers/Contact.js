const Contact = require("../Models/Contact")


exports.addContact = async(req,res)=>{

    try {
          const found = await Contact.findOne({email:req.body.email})
    
        if(found){
            return res.status(400).send("user already exists")
        }
        const contacttosave = new Contact(req.body)
        contacttosave.save()
        res.status(200).send({msg: 'user added', contacttosave})
    } catch (error) {
        res.status(500).send("can not add user")
            
    }
    }

    exports.getAllContacts = async(req,res)=>{
        try {
            const cont = await Contact.find()
            res.status(200).send({msg:"contact list",cont})
        
        
        } catch (error) {
            res.status(500).sendStatus('can not get')
            
        }
        }

        exports.getOneContact = async(req,res)=>{
            try {
                const {id}=req.params
                const cont = await Contact.findById(id)
                res.status(200).send({msg:"contact",cont})
            
            
            } catch (error) {
                res.status(500).sendStatus('can not get')
                
            }
            }


            exports.deleteContact = async(req,res)=>{
                try {
                    const {id}=req.params
                    await Contact.findByIdAndDelete(id)
                    res.status(200).send({msg:"contact deleted"})
                
                
                } catch (error) {
                    res.status(500).sendStatus('can not delete')
                    
                }
                }


            exports.updateContact = async(req,res)=>{
                try {
                    const {id}=req.params
                    await Contact.findByIdAndUpdate(id,{$set : req.body})
                    const cont = await Contact.findById(id)
                    res.status(200).send({msg:"contact updated",cont})
                
                
                } catch (error) {
                    res.status(500).sendStatus('can not delete')
                    
                }
                }