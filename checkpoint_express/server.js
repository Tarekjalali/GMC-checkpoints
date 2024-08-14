const express = require('express')

const app = express()

const port = 5000

const checkDate=(req,res,next)=>{
    var currentdate = new Date()
    var currentday = currentdate.getDay()
    var currenthours = currentdate.getHours()

    if(currentday==0 || currentday==6 || currenthours<=9 || currenthours>=17 ){
       return res.send("closed")
    }
    next()
}

app.use(checkDate)

app.get('/',(req,res)=>{
res.sendFile(__dirname+"/pages/home.html")
})

app.get('/services',(req,res)=>{
    res.sendFile(__dirname+"/pages/services.html")

})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+"/pages/contact.html")

})

app.listen(port, console.log(`the server is running on port ${port}`))