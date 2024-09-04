const app = require('express')();
const http = require('node:http')

const server = http.createServer(app);

app.use("/",(req,res)=>{
    res.status(200).send("<h1>I am home page</h1>")
})

server.listen(4000,()=>{
    console.log("Server is running on Port number 4000");
})