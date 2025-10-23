//This file is for defining various models (collections) and their Schemas

const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength:50
    },
    created_at:{
        type:Date,
        required:true
    }
})

const Chat= mongoose.model("Chat", chatSchema);         //Chat is model name or collection name (as chats in mongo database)


module.exports=Chat;














