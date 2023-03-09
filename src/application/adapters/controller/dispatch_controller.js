const express = require('express');
const routes = express.Router();
const serviceDispatch = require('../../../domain/services/dispatch_service');
const validator = require('../../validators/validators');

routes.get('/drones', async (req, res) => {
    const drones = await serviceDispatch.getAllDrones()

    if (!drones) res.send({ message: 'There is no drones to show' });

    res.send(drones);
});

routes.post('/create-drone', async (req, res) => {    
    const { name, model, weightLimit, battery, state } = req.body;

    const validateModel = validator.validModel(model);
    const validateStatus = validator.validStatus(state);

    if (!validateModel) res.send({
        message: 'There was an error, please sent correct model'
    })

    if (!validateStatus) res.send({
        message: 'There was an error, please sent correct status'
    })

    if (battery < 0.25 && validateStatus === 1) {
        res.send({
            message: 'Thats not possible with battery under 25% and status LOADING'
        });
    }

    const _newSchema = {
        name: name,
        model: validateModel,
        weightLimit: weightLimit,
        battery: battery,
        state: validateStatus
    }

    const droneNew = await serviceDispatch.createDrone(_newSchema)

    res.send(droneNew);

});

routes.post('/load-medication-drone', async (req, res) => {
    const { idDrone, name, weight, code } = req.body;

    if (!idDrone) res.send({message: "Must send id of Drone"})

    const medication = await serviceDispatch.createMedication(idDrone, name, weight, code);

    res.send({medication});

});

routes.get('/check-loaded-drone/:id', async (req, res) => {
    const id = req.params.id;

    const loaded = await serviceDispatch.checkIfDroneIsLoaded(id);

    if (!loaded) res.send({
        message: 'This drone is not loaded yet'
    })

    res.send({
        message: 'Drone loaded'
    });
});

routes.get('/check-availabilities-drone-loading', async (req, res) => {
    const listDrones = await serviceDispatch.checkAvailabilityDroneForLoading();

    if (listDrones.length === 0) {
        res.send({
            message: "There are no availabilities"
        });
    }

    res.send(listDrones);
})

routes.get('/check-battery-level/:id', async (req, res) => {
    const id = req.params.id;
    const drone = await serviceDispatch.checkBatteryLevel(id);

    if (!drone) {
        res.send({
            message: 'Theres no drone existing with that id'
        })
    }

    res.send({
        message: `Drone ${drone.name} with battery ${drone.battery * 100}%`
    })
});

module.exports = routes;