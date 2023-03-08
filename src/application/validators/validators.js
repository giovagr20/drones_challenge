const OK = 'OK';
const ERROR = 'ERROR';

module.exports = (model) => {
    console.log("Here ---- model: ", model);
    switch (model) {
        case 'Lightweight': return OK;
        case 'Middleweight': return OK;
        case 'Cruiserweight': return OK;
        case 'Heavyweight': return OK;
        default: return ERROR;
    }
};