const express = require('express');
const router = express.Router();


router.get('', (req, res) => {
    res.send('get classes');
});

router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

router.post('', (req, res) => {
    res.send('post classes');
});

router.post('/:id/enroll', (req, res) => {
    res.send(`enroll class ${req.params.id}`);
});

router.patch('/:id', (req, res) => {
    res.send(req.params.id);
});

router.delete('/:id', (req, res) => {
    res.send(req.params.id);
});

module.exports = router;