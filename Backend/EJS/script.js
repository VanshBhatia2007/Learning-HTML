const express = require("express");
const app = express();
const path = require("path");

const port=3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello"); //render used for sending a htm or ejs file
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});
