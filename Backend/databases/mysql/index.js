const {faker} = require('@faker-js/faker');
const mysql2 =require('mysql2');

const connection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    database:"delta",
    password:'12345'
});
try{
    connection.query("SHOW TABLES",(err,result)=>{
        if(err) throw err;
        console.log(result);
});
} catch(err){
    console.log(err);
}

connection.end();

// let createRandomUser = ()=> {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }

// console.log(createRandomUser());