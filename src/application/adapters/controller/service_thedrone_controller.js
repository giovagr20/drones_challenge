const express = require('express');
const routes = express.Router();
const _meditation = require('../persistence/medication_persistence');
const _drones = require('../persistence/drone_persistence');
const validator = require('../../validators/validators');
const { Model, State } = require('../../properties/properties');

routes.get('/drones', (req, res) => {
    const drones = _drones.find();

    if (!drones) res.send({ message: 'There is no drones to show' });

    res.send(drones);
});

routes.post('create-dron', (req, res) => {
    const { name, model, weightLimit, battery, state } = req.body;

    const validateModel = validator.isValidModel(model);
    const validateState = validator.isValidState(state);

    if (validateModel === Model.ErrorModel) res.send({
        message: 'Please, sent correct model'
    });

    if (validateState === State.ERROR) res.send({
        message: 'Please, sent correct state'
    });

    const _newSchema = {
        name: name,
        model: validateModel,
        weightLimit: weightLimit,
        battery: battery,
        state: validateState
    }

    const _newDrone = new _drones(_newSchema);
    _newDrone.save();
})

module.exports = routes;