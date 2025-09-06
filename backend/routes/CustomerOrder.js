const express = require("express");
const router = express.Router();
const CustomerOrder = require("../models/customer");
const Product = require("../models/ProductSchema");

router.post("/", async (req, res) => {
  try {
    const {
      customerName,
      contactNumber,
      address,
      orderItems,
      totalAmount
    } = req.body;

    // Validate fields
    if (!customerName || !contactNumber || !address || !orderItems?.length || !totalAmount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // ⛔ Stock Check & Update
    for (const item of orderItems) {
      const product = await Product.findById(item.productId);
      if (!product) return res.status(404).json({ error: "Product not found" });

      if (product.stock < item.quantity) {
        return res.status(400).json({ error: `Not enough stock for ${product.productName}` });
      }

      product.stock -= item.quantity;
      await product.save();
    }

    // ✅ Save the order
    const newOrder = new CustomerOrder({
      customerName,
      contactNumber,
      address,
      orderItems,
      totalAmount
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);

  } catch (error) {
    console.error("Error placing order:", error.message);
    res.status(500).json({ error: "Failed to place order" });
  }
});
module.exports = router;
