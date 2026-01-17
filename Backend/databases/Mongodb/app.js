const express = require("express");
const app = express();
const path = require("path");
// const { v4 : uuidv4 } = require('uuid');
var methodOverride = require("method-override");
// const mysql2 =require('mysql2');
// const {faker} = require('@faker-js/faker');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
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

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
    
});

app.post("/chats",(req,res)=>{
    let {from,to,msg} = req.body;
    let newchat = new chat({
        from: from,
        to : to,
        msg:msg,
        create_at : new Date(),
    })
    console.log(newchat);
    newchat.save()
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    res.redirect("/chats");
});



app.get("/chats",async (req,res)=>{
    let chats = await chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})
app.get("/chats/:id/edit", async (req,res)=>{
    let {id}=req.params;
    let chats = await chat.findById(id);
    res.render("edit.ejs",{chats});
});

app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg : newmsg}=req.body;
    let updatedchat = await chat.findByIdAndUpdate(id,{msg : newmsg},{runValidators: true ,new: true});
    console.log(updatedchat);
    res.redirect("/chats");
});

app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let deletechat = await chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.listen(3000,()=>{
    console.log("server listening on port 3000");
});