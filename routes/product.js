const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/addProduct", async (req, res) => {
    try {
        console.log(req.body);
        const product = await Product.create(req.body); 
        console.log(product);  
        res.status(201).json(product);
    
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

router.get("/getProduct", async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

router.get("/getProduct/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

router.put("/updateProduct/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

router.delete("/deleteProduct/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

router.delete("/deleteAllProduct", async (req, res) => {
    try {
        const product = await Product.deleteMany({});
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});