const { Schema, model } = require('mongoose');

const _droneSchema = new Schema({
    name: { type: String, maxLength: 100 },
    model: { type: String },
    weightLimit: { type: Number, max: 500, min: 0 },
    battery: { type: Number, max: 1, min: 0 },
    state: { type: String }
});

module.exports = model('Drone', _droneSchema);
