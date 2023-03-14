const Model = require('../../../application/validators/validators');

describe("Check Model Properties :/", () => {
    test("It should response a model correctly", () => {
        const model = 'Heavyweight';

        const response = Model.validModel(model);

        expect(response).toBe(3);

    });

    test("It should response a status correctly", () => {
        const status = "LOADED";

        const response = Model.validStatus(status);

        expect(response).toBe(2);
    });

    test("It should response a error model", () => {
        const model = "Modelx2";

        const response = Model.validModel(model);

        expect(response).toBe(4);

    });

    test("It should response a error status", () => {
        const status = "Statusx2";

        const response = Model.validStatus(status);

        expect(response).toBe(6);

    });
  });