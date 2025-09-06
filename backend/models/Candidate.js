const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
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

  skills: {
    type: String,
    trim: true
  },

  resume: {
    data: Buffer,
    contentType: String,
    originalName: String
  }

}, { timestamps: true });

module.exports = mongoose.model('Candidate', candidateSchema);
