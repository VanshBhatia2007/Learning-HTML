const express = require("express");
const app = express();
const path = require("path");
const { v4 : uuidv4 } = require('uuid');
var methodOverride = require("method-override");

// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const port = 3000;
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        username:"vansh bhatia",
        content:"i can do this all day",
        id: uuidv4(),
    },
    {
        username:"vansh bhatia",
        content:"i can do this all day",
        id: uuidv4(),
    },
    {
        username:"vansh bhatia",
        content:"i can do this all day",
        id: uuidv4(),
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
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
     
});

app.get("/posts/:id",(req,res)=>{
   let {id}=req.params;
   let post= posts.find((p) => id === p.id);
   res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newcontent = req.body.content;
    let post= posts.find((p) => id === p.id);
    post.content= newcontent;
    res.redirect("/posts");
});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts= posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post= posts.find((p) => id === p.id);
    res.render("edit-post.ejs",{post});
});


app.listen(port,()=>{
    console.log(`app is listening ${port}`);
});