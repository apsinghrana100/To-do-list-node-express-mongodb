const app = require('express')();
const http = require('node:http')
const bodyparser =  require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./src/routes/todoRoutes');
require('dotenv').config();

const server = http.createServer(app);
app.use(bodyparser.json())
app.use(cors())

const PORT =process.env.PORT || 5000
const MONGOURL = process.env.MONGOURL;


app.use(router);


mongoose.connect(MONGOURL)
.then(()=>{
    console.log("database connected");
    server.listen(PORT,()=>{
        console.log(`Server is running on Port number ${PORT}`);
    })
})
.catch((error)=>{
    console.log(`Something went wrong in database start ${error}`)
})
