//dependencies and reference
const DB = require('../models');
const ROUTER = require('express').Router();

//GET '/'
ROUTER.post('/', (req, res) => {
    DB.Bounty.create(req.body)
    .then(newBounty => {
        res.status(201).send(newBounty);
    })
    .catch(err => {
        console.log(err)
        res.status(500).send({ message: 'Internal server error' });
    })
});

//GET '/:id'

//PUT

//DELETE


module.exports = ROUTER;