const mongoose = require('mongoose');

main()
     .then(()=>{
        console.log("chlgya")
     })
     .catch((err)=> console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}
const chat = require("./models/chat.js");

let chats = [
    {
    from : "vansh",
    to : "aditya",
    msg: "ht bsdk",
    created_at : new Date()
    },
    {
    from : "vansh",
    to : "aditya",
    msg: "ht bsdk",
    created_at : new Date()
    },
    {
    from : "vansh",
    to : "aditya",
    msg: "ht bsdk",
    created_at : new Date()
    },
    {
    from : "vansh",
    to : "aditya",
    msg: "ht bsdk",
    created_at : new Date()
    },
    {
    from : "vansh",
    to : "aditya",
    msg: "ht bsdk",
    created_at : new Date()
    },

]

chat.insertMany(chats);