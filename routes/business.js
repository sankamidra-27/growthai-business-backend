// routes/business.js
import express from 'express';
import { headlines } from '../utils/headlines.js';

const router = express.Router();

function generateHeadline(name, location) {
  const template = headlines[Math.floor(Math.random() * headlines.length)];
  return template.replace('[name]', name).replace('[location]', location);
}

router.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: 'Missing name or location' });
  }

  res.json({
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    headline: generateHeadline(name, location),
  });
});

router.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

  if (!name || !location) {
    return res.status(400).json({ error: 'Missing name or location' });
  }

  res.json({
    headline: generateHeadline(name, location),
  });
});

export default router;
