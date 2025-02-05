const express = require('express');
const router = express.Router();
const experiences = require('../data/experiences');

// Get all experiences
router.get('/', (req, res) => {
  res.json(experiences);
});

// Get experiences by category
router.get('/category/:category', (req, res) => {
  const category = req.params.category;
  const filteredExperiences = experiences.filter(exp => 
    exp.category.toLowerCase() === category.toLowerCase()
  );
  res.json(filteredExperiences);
});

// Get experience by id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const experience = experiences.find(exp => exp.id === id);
  if (!experience) {
    return res.status(404).json({ message: 'Experience not found' });
  }
  res.json(experience);
});

module.exports = router;
