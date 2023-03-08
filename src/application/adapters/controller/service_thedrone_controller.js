const express = require('express');
const routes = express.Router();
const _meditation = require('../persistence/medication_persistence');
const _drones = require('../persistence/drone_persistence');
const { Model } = require('../../properties/properties');

routes.get('/drones', (req, res) => {
    const drones = _drones.find();

    if (!drones) res.send({ message: 'There is no drones to show' });

    res.send(drones);
});

routes.post('create-dron', (req, res) => {
    const { name, model, weightLimit, battery, state } = req.body;

    const _newSchema = {
        name: name, 
        model: model === Model, 
        weightLimit: weightLimit, 
        battery: battery, 
        state: state
    }

    const _newDrone = new _drones(_newSchema);

    _newDrone.save();
})

module.exports = routes;