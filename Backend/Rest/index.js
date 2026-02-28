const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        username:"vansh bhatia",
        content:"i can do this all day",
        id:"1a",
    },
    {
        username:"vansh bhatia",
        content:"i can do this all day",
        id:"2a",
    },
    {
        username:"vansh bhatia",
        content:"i can do this all day",
        id:"3a",
    },
];



app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});
app.get("/posts/new",(req,res)=>{
    res.render("form.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    posts.push({username,content});
    res.redirect("/posts");
     
});

app.get("/posts/:id",(req,res)=>{
   let {id}=req.params;
   let post= posts.find((p) => id === p.id);
   res.render("show.ejs",{post});
});

app.listen(port,()=>{
    console.log(`app is listening ${port}`);
});