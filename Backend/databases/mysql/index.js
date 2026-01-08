const {faker} = require('@faker-js/faker');
const mysql2 =require('mysql2');

const connection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    database:"delta",
    password:'12345'
});

let createRandomUser = ()=> {
  return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
}

// console.log(createRandomUser());

let q= "INSERT INTO user (userid,username,email,password) VALUES ?";
let data=[];
for(let i=0;i<=100;i++){
    data.push(createRandomUser());
}

try{
    connection.query(q,[data],(err,result)=>{
        if(err) throw err;
        console.log(result);
});
} catch(err){
    console.log(err);
}

connection.end();