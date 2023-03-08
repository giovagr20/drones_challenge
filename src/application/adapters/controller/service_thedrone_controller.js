const express = require('express');
const routes = express.Router();
const _drones = require('../persistence/medication_persistence');

routes.get('/drones', (req, res) => {
    const drones = _drones.find();

    if (!drones) res.send({message: 'There is no drones to show'});

    res.send(drones);
});



module.exports = routes;