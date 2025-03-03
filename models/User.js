import mongoose from "mongoose";
import bcrypt from "bcrypt";

const User = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true}
});

User.pre('save',async function (next) {
    if (!this.isModified("password")) return next(); 
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

User.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
    
}

export default mongoose.model('User', User);