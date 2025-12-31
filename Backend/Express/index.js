const express=require("express");
const app = express();

let port=3000;

app.listen(port,()=>{
    console.log(`app is listening ${port}`);
});

// app.use((req,res)=>{
//     console.log("bale bale");
//     res.send("this a your mom");
// });

//routing

// app.get("/",(req,res)=>{
//     res.send("this is my root yoooooo");
// });

// app.get("/apple",(req,res)=>{
//     res.send("this is apple root");
// });

// // app.use((req,res)=>{
// //     res.send("this do not exist");
// // });

// app.post("/",(req,res)=>{
//     res.send("you sent a post request");
// });

// path params

app.get("/:username/:id",(req,res)=>{
    let {username , id} = req.params;
    let str = `<h1>hello @ ${username}</h1>`;
    res.send(str);
});

//query strings

app.get("/:search",(req,res)=>{
    let {q} =req.query;
    res.send(`hello ${q}`);
})