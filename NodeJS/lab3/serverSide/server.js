const express = require('express');
const fs = require("fs");
const path = require("path");

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

let welcomeHTML = fs.readFileSync("../clientSide/welcome.html").toString();
let users_array = []

app.get("/main.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"../clientSide/main.html"));
})
app.get("/style.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"../clientSide/style.css"));  
})
app.get("/script.js",(req,res)=>{
    res.sendFile(path.join(__dirname,"../clientSide/script.js"));  
})
app.get("/welcome.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"../clientSide/welcome.html"));
})
app.get("/users.js",(req,res)=>{
    res.sendFile(path.join(__dirname,"../clientSide/users.js")); 
})
app.get("/data/clients.json",(req,res)=>{
    res.sendFile(path.join(__dirname,"../data/clients.json")); 
})

app.post("/welcome.html", (req, res,next) => {
    let name = req.body.username
    let email = decodeURIComponent(req.body.email.replaceAll("+", " "))
    let phone =  req.body.phone
    let address = req.body.address
    let client = {
        username: name,
        address: address,
        phone: phone,
        email: email
    }
    welcomeHTML = welcomeHTML.
        replace("{username}", client.username).
        replace("{address}", client.address).
        replace("{phone}", client.phone).
        replace("{email}", client.email)

    let data = fs.readFileSync('../data/clients.json')
    users_array = JSON.parse(data)
    users_array.push(client)
    fs.writeFileSync(('../data/clients.json'), JSON.stringify(users_array))
    next()

},(req,res)=>{
    res.send(welcomeHTML);
})

app.listen(7000, () => console.log('app is listening on port 7000.'));