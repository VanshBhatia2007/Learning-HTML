const express = require("express");
const app = express();
const path = require("path");

const port=3000;

app.use(express.static(path.join(__dirname,"/public/CSS")));
app.use(express.static(path.join(__dirname,"/public/JS")));
// app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views")); //path.join se jha js file h whi pr check krega ki views folder h ki nhi

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
    // console.log(req.body);
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
