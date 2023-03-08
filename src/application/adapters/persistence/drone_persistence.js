const { Schema, model } = require('mongoose');
const { Model, State } = require('../../properties/properties');

const _droneSchema = new Schema({
    name: { type: String, maxLength: 100},
    model: { type: Model },
    weightLimit: {type: Number, max: 500, min: 0 },
    battery: { type: Number, max: 1, min: 0 },
    state: { type: State }
});

module.exports = model('Drone', _droneSchema);
