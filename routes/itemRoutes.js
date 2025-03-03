import express from "express";
import Item from "../models/Item.js";
import checkJwt from "../middlewares/checkJwtToken.js";
import mongoose from "mongoose";


const router = express.Router();

router.post("/items", checkJwt, async (req, res) => {
  const { name, description, price } = req.body;
  if (!name || !description || !price)
    res.status(400).json("name or description or price Is NOT !");

  try {
    const newItem = new Item({ name, description, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/items", checkJwt, async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/items/:id", checkJwt, async (req, res) => {
  try {
    

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const item = await Item.findOne({ _id: req.params.id });
    
    if (!item) return res.status(404).json({ message: "Item not found" });

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/items/:id", checkJwt, async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    
    if (!item) return res.status(404).json({ message: "Item not found" });

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.delete('/items/:id', checkJwt, async (req, res) => {
    try {
      
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: "Item not found" });
            
        res.json({ message: 'Item deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
})

export default router;