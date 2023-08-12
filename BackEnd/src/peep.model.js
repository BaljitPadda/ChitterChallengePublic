import mongoose, { mongo } from "mongoose";

const peepSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    time: { type: Date, required: true, default: Date.now },
    message: { type: String, required: true }

});

const Peep = mongoose.model(`Peep`, peepSchema);
export default Peep;