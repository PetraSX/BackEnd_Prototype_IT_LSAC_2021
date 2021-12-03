const Joi = require('joi');
const express = require('express');
const router = express.Router();
const db = require('../models');
const { ValidationError } = require('sequelize');


router.get('', (req, res) => {
    db.Contact_requests.findAll().then(cr => {
        res.send(cr);
    });
});

router.get('/:id', (req, res) => {
    db.Contact_requests.findOne({
        where: {
            id: req.params.id
        }
    }).then((cr) => {
        if (cr) {
            res.send(cr)
        }
        else {
            res.status(404).send();
        }
    });
});

router.post('', async (req, res) => {
    try {
        let item = await db.Contact_requests.build({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });
        await item.validate();
        // validation passed
        await item.save();
        console.log('object created successfully');
        res.status(201).send();
    } catch (e) {
        if (e instanceof ValidationError) {
            res.status(400).send();
            return console.error('Captured validation error: ', e.errors[0].message);
        }
        res.status(400).send();
    }
});

router.patch('/:id', (req, res) => {
    db.Contact_requests.findOne({
        where: {
            id: req.params.id
        }
    }).then((cr) => {
        if (cr) {
            db.Contact_requests.update({
                is_resolved: req.body.is_resolved
            },
            {
                where: {
                    id: req.params.id
                }
            }).then(() => res.status(200).send());
        }
        else {
            res.status(404).send();
        }
    });
});

router.delete('/:id', (req, res) => {
    db.Contact_requests.findOne({
        where: {
            id: req.params.id
        }
    }).then((cr) => {
        if (cr) {
            db.Contact_requests.destroy({
                where: {
                    id: req.params.id
                }
            }).then(() => res.status(200).send());
        }
        else {
            res.status(404).send();
        }
    });
});

module.exports = router;