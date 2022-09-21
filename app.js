const express = require('express')

const server = express();

const name=['john','jack','jam']

const database=[{
    firstname:"john",
    secondname:"doe",
    age:'19',
    life:"engineer",
},
{
    firstname:'jack',
    secondname:'kalvi',
    age:'22',
    life:'doctor',
},
{
    firstname:'jam',
    secondname:'kali',
    age:'20',
    life:'teacher',
}];

server.get('/',(req,res)=>{
    res.end("hello");
});

server.get('/name',(req,res)=>{
    res.send(name);
});

server.get('/data',(req,res)=>{
    res.send(database);
})

server.get('/bye',(req,res)=>{
    res.end("bye")
})

server.listen(3000,()=>{
    console.log("server is running on port 3000");
});