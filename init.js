// This file is for testing databases and is used once (to insert testing data into database)

const mongoose = require('mongoose');
const Chat= require("./models/chat");

main()
    .then(() => console.log('Connected!'))
    .catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')    //whatsapp is database name here
}




allChats = [
  {
    from: "emma",
    to: "olivia",
    msg: "i love you",
    created_at: new Date()
  },
  {
    from: "jack",
    to: "ryan",
    msg: "hey bro, how’s your project going?",
    created_at: new Date()
  },
  {
    from: "ryan",
    to: "jack",
    msg: "almost done! just debugging some issues.",
    created_at: new Date()
  },
  {
    from: "sophia",
    to: "chloe",
    msg: "let’s meet at the café tomorrow?",
    created_at: new Date()
  },
  {
    from: "chloe",
    to: "sophia",
    msg: "sure! what time suits you?",
    created_at: new Date()
  },
  {
    from: "liam",
    to: "ava",
    msg: "movie night this weekend?",
    created_at: new Date()
  },
  {
    from: "ava",
    to: "liam",
    msg: "yes, let’s do it! I’ll bring popcorn 🍿",
    created_at: new Date()
  },
  {
    from: "ethan",
    to: "mia",
    msg: "did you finish the MongoDB assignment?",
    created_at: new Date()
  },
  {
    from: "mia",
    to: "ethan",
    msg: "yep! I can send you the notes if you want.",
    created_at: new Date()
  },
  {
    from: "noah",
    to: "harper",
    msg: "good morning! don’t forget today’s meeting.",
    created_at: new Date()
  }
];


Chat.insertMany(allChats);



















