const request = require("supertest");
const routes = require("../../../../application/adapters/controller/dispatch_controller");
const MongoMemoryServer= require('mongodb-memory-server').MongoMemoryServer;
const mongoose = require("mongoose");



describe("GET : /", () => {
  test("It should response correctly", async () => {
    const response = request(routes).get("/");

    response.then((res) => {
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe("Ok");
      done();
    });
  });
});

/* describe("GET: /api/drones", () => {
  beforeAll(async () => {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    const option = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 10
    }

    await mongoose.connect(uri, option);
  }, 60000);

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
  });

  afterAll(async () => {
    const collections = mongoose.connection.collections;

    for (key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
  });


  it("It should return all drones", async () => {
    const response = await request(routes).get("/drones");
    console.log(response);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    done();
  }, 60000);
}); */
