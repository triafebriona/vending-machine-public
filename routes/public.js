const express = require('express');
const router = express.Router();
const publicController = require('../controllers/publicController');

// Public transactions page
router.get('/', (req, res) => {
    res.redirect('/transactions');
});

router.get('/transactions', publicController.transactions);

// Health check
router.get('/health', publicController.health);

module.exports = router;