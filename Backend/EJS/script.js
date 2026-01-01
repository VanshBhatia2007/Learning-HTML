const express = require("express");
const app = express();
const path = require("path");

const port=3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

// app.get("/hello",(req,res)=>{
//     res.send("hello"); //render used for sending a htm or ejs file
// });

app.get("/dice",(req,res)=>{
    let num = Math.floor(Math.random()*6)+1;
    res.render("dice.ejs",{dice:num});// dice is key in ejs file and num is value for that dice
});

app.get("/ig/:username",(req,res)=>{
    // const followers=[1,2,3,4];
    let instadata =require("./data.json");
    let {username} = req.params;
    const data= instadata[username];
    if(data){
        res.render("insta.ejs",{data});
    }
    else{
        res.render("error.ejs")
    }
    
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});
