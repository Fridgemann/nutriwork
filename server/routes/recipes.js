const express = require('express');
const router = express.Router();
const recipes = require('../data/recipes.json');

router.get('/', (req, res) => {
    res.json(recipes);
});

module.exports = router;