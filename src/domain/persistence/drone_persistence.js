const { Schema, model } = require('mongoose');

const _droneSchema = new Schema({
    name: { type: String, maxLength: 100 },
    model: { type: Number },
    weightLimit: { type: Number, max: 500, min: 0 },
    battery: { type: Number, max: 1, min: 0 },
    state: { type: Number }
});

module.exports = model('Drone', _droneSchema);
