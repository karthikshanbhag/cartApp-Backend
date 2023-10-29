const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

router.post("/addToCart", async (req, res) => {
  try {
    console.log(req.body);
    const cart = await Cart.create(req.body); 
    console.log(cart);  
    res.status(201).json(cart);

  } catch (error) {
    console.log(error);
    res.status(500).send("Iternal Server Error");
  }
});

router.get("/getCart", async (req, res) => {
    try {
        const cart = await Cart.find({});
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).send("Iternal Server Error");
    }
});

router.get("/getCart/:id", async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).send("Iternal Server Error");
    }
});

router.put("/updateCart/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        console.log(req.body)
        const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).send("Iternal Server Error");
    }
});

router.delete("/deleteCart/:id", async (req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).send("Iternal Server Error");
    }
});

router.delete("/deleteAllCart", async (req, res) => {
    try {
        const cart = await Cart.deleteMany({});
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).send("Iternal Server Error");
    }
}); 
module.exports = router;