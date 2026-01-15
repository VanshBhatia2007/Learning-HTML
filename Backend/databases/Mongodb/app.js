const express = require("express");
const app = express();
const path = require("path");
// const { v4 : uuidv4 } = require('uuid');
// var methodOverride = require("method-override");
// const mysql2 =require('mysql2');
// const {faker} = require('@faker-js/faker');

app.use(express.urlencoded({extended:true}));
// app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
const chat = require("./models/chat.js");

const mongoose = require('mongoose');

main()
     .then(()=>{
        console.log("chlgya")
     })
     .catch((err)=> console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

// chat.insertMany([{
//     from : "vansh",
//     to : "aditya",
//     msg: "ht bsdk",
//     created_at : new Date()
// }]);

app.get("/",(req,res)=>{
    res.send("root working");
});

app.get("/chats",async (req,res)=>{
    let chats = await chat.find();
    console.log(chats);
    res.send("working");
})

app.listen(3000,()=>{
    console.log("server listening on port 3000");
});