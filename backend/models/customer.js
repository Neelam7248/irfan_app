const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
address: {
    type: String,
    required: true,
    unique: false,
    lowercase: false
  },
phone: {
    type: Number,
    required: true,
    unique:false,
    
  },



  

}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
