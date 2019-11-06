const express = require('express')
const mongoose=require("mongoose")
const routes=require('./routes')
const cors=require('cors')


const server=express()

mongoose.connect('YOUR MONGO DB CONNECTION',{useNewUrlParser:true})

server.use(cors());

server.use(express.json())
server.use(routes)


server.listen(3000,()=>{
    console.log("Servidor executando na porta 3000")
})
