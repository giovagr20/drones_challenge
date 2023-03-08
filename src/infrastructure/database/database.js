const DB = require('../utils/utils').DB;
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(DB)
    .then(() => console.log(`DB Connected on ${DB}`))
    .catch((error) => console.log(`DB error ${error}`))

    process.on('SIGINT', () => {
        console.log(`DB Disconnected`)
        process.exit(0);
    })
}