const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

// Search entries
router.get('/search', async (req, res) => {
  const { q, language } = req.query;
  if (!q || !language) return res.json({ entries: [] });
  const entries = await Entry.find({
    word: { $regex: new RegExp(`^${q}$`, 'i') },
    language
  });
  res.json({ entries });
});

// Add entry
router.post('/', async (req, res) => {
  const { word, language, partOfSpeech, definitions, translations } = req.body;
  if (!word || !language || !definitions) return res.status(400).json({ error: 'Missing required fields' });
  const entry = new Entry({ word, language, partOfSpeech, definitions, translations });
  await entry.save();
  res.status(201).json(entry);
});

module.exports = router; 