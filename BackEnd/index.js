import mongoose, { mongo } from "mongoose";
import Peep from "./src/peep.model.js";
import User from "./src/user.model.js";

import peepMockData from "./test/testData/peepsMockData.js";
import userMockData from "./test/testData/usersMockData.js";

console.log("This script pre-populates the database with some test data")

const DB_URI = "mongodb://localhost:27017/Peep";
mongoose.connect(DB_URI);

console.log("connected to DB")

console.log("loaded test Users into database")

await User.deleteMany();
await User.insertMany(userMockData.users);

console.log("loaded test Peeps into database")

await Peep.deleteMany();
await Peep.insertMany(peepMockData.peeps);

console.log("Load Complete")

process.exit(0);