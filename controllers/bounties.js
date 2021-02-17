//dependencies and reference
const DB = require('../models');
const ROUTER = require('express').Router();

//POST '/' make a new bounty
ROUTER.post('/', (req, res) => {
    DB.Bounty.create(req.body)
    .then(newBounty => {
        res.status(201).send(newBounty);
    })
    .catch(err => {
        console.log(err)
        res.status(500).send({ message: 'Internal server error' });
    }).catch(err => {
        res.status(500).send({ messge: `Error hit at READ ALL BOUNTIES`})
    })
});

//GET '/' read all bounties
ROUTER.get('/', (req,res) => {
    DB.Bounty.find()
    .then(bounties => {
        res.status(200).send(bounties);
    })
})

//GET '/:id'
ROUTER.get('/:id', (req, res) => {
    DB.Bounty.findById(req.params.id)
    .then(bounty => {
        if (bounty) {
            res.send(bounty);
        } else {
            res.status(404).send({ message: `404- Bounty not found`})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({ message: `Service Unavailable` });
    });
});

//PUT
ROUTER.put('/:id', (req, res) => {
    DB.Bounty.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true }
        )
    .then(updatedBounty => {
        res.send(updatedBounty);
    })
    .catch(err => {
        console.log(err);
        res.status(503).send({ message: `server problems, who dis?` });
    });
});

//DELETE


module.exports = ROUTER;