import mongoose, { Mongoose } from "mongoose";

const Item = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
})

export default mongoose.model('Item', Item)