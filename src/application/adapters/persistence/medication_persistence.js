const { Schema, model, default: mongoose } = require('mongoose');

const _medicationSchema = new Schema({
    name: { type: String, match: /[a-zA-Z0-9_-]$/ },
    weight: { type: Number },
    code: { type: String, match: /[A-Z0-9_-]$/ },
    image: { data: Buffer, contentType: String },
    droneBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Drone'}
});

module.exports = model('Medication', _medicationSchema);    