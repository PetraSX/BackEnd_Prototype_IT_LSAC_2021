const express = require('express');
const router = express.Router();


router.post('/register', (req, res) => {
    res.send('auth register');
});

router.post('/login', (req, res) => {
    res.send('auth login');
});

module.exports = router;