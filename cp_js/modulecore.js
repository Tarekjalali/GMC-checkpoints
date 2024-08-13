
const fs = require('fs')

console.log("Start")

// fs.readFile('./names.txt','utf-8',(err,data)=>{
//     if (err) {
//         console.log(err)
        
//     } else {

//         console.log(data)
//     }
// })

console.log(fs.readFileSync('./names.txt','utf-8'))

const http = require("http")

http.createServer((req,res)=>{
    res.write("<h1>Hello</h1>")
    res.end()
}).listen(5000,console.log('Server is running'))