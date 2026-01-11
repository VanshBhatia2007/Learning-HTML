const express = require("express");
const app = express();
const path = require("path");
const { v4 : uuidv4 } = require('uuid');
var methodOverride = require("method-override");
const mysql2 =require('mysql2');
const {faker} = require('@faker-js/faker');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let createRandomUser = ()=> {
  return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
}


let port =3000;
const connection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    database:"delta",
    password:'12345'
});

// try{
//     connection.query((err,result)=>{
//         if(err) throw err;
//         console.log(result);
// });
// } catch(err){
//     console.log(err);
// }

app.get("/",(req,res)=>{
    let q="SELECT count(*) FROM USER";
    try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let count = result[0]["count(*)"];
        console.log(result[0]["count(*)"]);
        res.render("home.ejs",{count});
    });
    } catch(err){
    console.log(err);
    res.send("some error in database");
    }
    // res.send("welcome to home page");
});

app.get("/user",(req,res)=>{
    let q=`SELECT * FROM USER`;
     try{
    connection.query(q,(err,users)=>{
        if(err) throw err;
        res.render("user.ejs",{users})
    });
    } catch(err){
    console.log(err);
    res.send("some error in database");
    }
});

app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q= `SELECT * FROM user WHERE userid="${id}"`;
    try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let user = result[0];
        res.render("edit.ejs",{user});
    });
    } catch(err){
    console.log(err);
    res.send("some error in database");
    }
    // res.render("edit.ejs",{id});
})

//update route

app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let q= `SELECT * FROM user WHERE userid="${id}"`;
    let {password : formpass , username : newusername} = req.body;
    try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let user = result[0];
        if(formpass != user.password) res.send("wrong password");
        else{
            let q2=`UPDATE user SET username="${newusername}" where userid='${id}'`;
            connection.query(q2,(err,result)=>{
                if(err) throw err;
                res.redirect("/user");
            });
        } 
        // res.render("edit.ejs",{user});
    });
    } catch(err){
    console.log(err);
    res.send("some error in database");
    }
});

app.get("/user/new",(req,res)=>{
    res.render("newuser.ejs");
});

app.post("/user",(req,res)=>{
    let {username: newuser , password :newuserpass , email:newemail } = req.body;
    let id = uuidv4();
    let q= `INSERT INTO USER (userid,username,email,password) VALUES ("${id}","${newuser}","${newemail}","${newuserpass}")`;
    try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        console.log(result);
        console.log(q);
        res.redirect("/user");
    });
    } catch(err){
    console.log(err);
    res.send("some error in database");
    }
});

app.get("/user/:id/delete",(req,res)=>{
    let {id}=req.params;
    let q= `SELECT * FROM USER WHERE USERID="${id}"`;
    try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let user = result[0];
        console.log(user);
        res.render("delete.ejs", { user });
    });
    } catch(err){
    console.log(err);
    res.send("some error in database");
    }
});

app.delete("/user/:id",(req,res)=>{
    let {id} = req.params;
    let {email:email , password:pass} = req.body;
    let q= `SELECT * FROM USER WHERE USERID="${id}"`;
    try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let user = result[0];
        
        if(email != user.email || pass != user.password){
            return res.send("email or password is wrong...try again!");
        }else{
            let q2=`DELETE FROM USER WHERE USERID = "${id}"`;
            connection.query(q2,(err,result)=>{
                if(err) throw err;
                else{
                    console.log("delete");
                    res.redirect("/user");
                    // res.send("deleted");
                }
                
            });
        }
    });
    } catch(err){
    console.log(err);
    res.send("some error in database");
    }
});

app.listen(port,()=>{
    console.log(`app is listening ${port}`);
});