const mongoose = require('mongoose');

const chatschema = new mongoose.Schema({
    from: {
        type: String
    },
    to: {
        type: String
    },
    msg: {
        type: String,
        maxlength:50
    },
    created_at: {
        type: Date
    },
});

const chat = mongoose.model("Chat",chatschema);

module.exports=chat;