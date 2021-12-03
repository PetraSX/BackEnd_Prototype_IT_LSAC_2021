const express = require('express');
const router = express.Router();


router.get('', (req, res) => {
    res.send('users root');
});

router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

router.patch('/:id', (req, res) => {
    res.send(req.params.id);
});

router.delete('/:id', (req, res) => {
    res.send(req.params.id);
});

module.exports = router;