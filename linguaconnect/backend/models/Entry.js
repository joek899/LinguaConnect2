const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  word: { type: String, required: true, trim: true },
  language: { type: String, required: true }, // e.g., 'en', 'es'
  partOfSpeech: { type: String },
  definitions: [{
    meaning: { type: String, required: true },
    examples: [String]
  }],
  translations: [{
    language: { type: String }, // e.g., 'es'
    words: [String]
  }],
  createdAt: { type: Date, default: Date.now }
});

entrySchema.index({ word: 'text' });

module.exports = mongoose.model('Entry', entrySchema); 