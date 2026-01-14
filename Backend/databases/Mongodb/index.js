const mongoose = require('mongoose');

main()
     .then(()=>{
        console.log("chlgya")
     })
     .catch((err)=> console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userschema = new mongoose.Schema({
    name:String,
    email: String,
    age: Number
});

const User = mongoose.model("User",userschema);

const user1 = new User({
    name: "Vansh",
    email: "abc",
    age: 18
});

user1.save()
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })