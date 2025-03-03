import User from "../models/User.js";
import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "Is Not Username or Password" });

  try {
    const findUser = await User.findOne({ username });
    if (findUser)
      return res.status(400).json({ message: "User already exists" });

    const user = new User({ username, password });
    await user.save();
    return res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "Is not Username or Password !" });

  try {
    const user = await User.findOne({ username });

    if (!user) return res.status(400).json({ message: "Invalid username " });

    const checkPassword = await user.isPasswordCorrect(password);

    if (!checkPassword)
      return res.status(400).json({ message: "Invalid password " });

    const token = jwt.sign({ user: { id: user._id } }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
