const express = require('express');
const router = express.Router();


router.get('', (req ,res) => {
    res.send('get reviews');
});

router.get('/:id', (req ,res) => {
    res.send(req.params.id);
});

router.post('', (req ,res) => {
    res.send('post reviews');
});

router.patch('/:id', (req ,res) => {
    res.send(req.params.id);
});

router.delete('/:id', (req ,res) => {
    res.send(req.params.id);
});

module.exports = router;
