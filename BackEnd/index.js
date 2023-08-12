import mongoose, { mongo } from "mongoose";
import Peep from "./src/peep.model.js";
import User from "./src/user.model.js";

// const date = new Date();
// console.log("Time now: " + date.getHours() + ": " + date.getMinutes() + ": " + date.getSeconds());

const DB_URI = "mongodb://localhost:27017/Peep";
mongoose.connect(DB_URI);

const myTweet = new Peep({
    userID: "12345",
    message: "This is a test message"
});

const peepResult = await Peep.find();
console.log(peepResult)

const user1 = new User({
    name: "Joe Bloggs",
    username: "JoeCodes2023",
    email: "joebloggs@hotmail.co.uk",
    password: "easypassword"
});

const userResult = await User.find();
console.log(userResult);

User.find();