const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productId: { type: String, unique: true, required: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  stock: { type: Boolean, default: true }
});

// ✅ Safe export to avoid model overwrite or block scope issues
module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);
