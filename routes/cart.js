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
module.exports = router;