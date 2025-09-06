const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
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

  password: {
    type: String,
    required: true
  },

  company: {
    type: String,
    trim: true
  },

  needs: {
    type: String,
    trim: true
  },

  companyLogo: {
    data: Buffer,
    contentType: String,
    originalName: String
  }

}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
