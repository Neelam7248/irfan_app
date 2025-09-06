const mongoose = require('mongoose');
const Product = require('../models/productSchema');
const dotenv = require('dotenv');
dotenv.config();

const dummyProducts = [
  { productId: 'P1001', productName: 'Laptop', price: 95000, quantity: 10, stock: true },
  { productId: 'P1002', productName: 'Smartphone', price: 65000, quantity: 15, stock: true },
  { productId: 'P1003', productName: 'Tablet', price: 42000, quantity: 8, stock: true },
  { productId: 'P1004', productName: 'Wireless Headphones', price: 12000, quantity: 25, stock: true },
  { productId: 'P1005', productName: 'Smartwatch', price: 18000, quantity: 0, stock: false }
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    await Product.deleteMany({});
    await Product.insertMany(dummyProducts);
    console.log('✅ Products seeded successfully!');
    mongoose.disconnect();
  } catch (err) {
    console.error('❌ Error seeding products:', err.message);
  }
}

seedProducts();
