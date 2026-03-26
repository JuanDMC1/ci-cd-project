const request = require("supertest");
const app = require("../src/app");

describe("API Tests", () => {

  it("GET /items should return 200", async () => {
    const res = await request(app).get("/items");
    expect(res.statusCode).toBe(200);
  });

  it("POST /items should create item", async () => {
    const res = await request(app)
      .post("/items")
      .send({ name: "item1" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("item1");
  });

  it("PUT /items/0 should update item", async () => {
    await request(app).post("/items").send({ name: "old" });

    const res = await request(app)
      .put("/items/0")
      .send({ name: "updated" });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("updated");
  });

  it("DELETE /items/0 should delete item", async () => {
    await request(app).post("/items").send({ name: "to delete" });

    const res = await request(app).delete("/items/0");

    expect(res.statusCode).toBe(204);
  });

  it("GET /items should return array", async () => {
    const res = await request(app).get("/items");
    expect(Array.isArray(res.body)).toBe(true);
  });

});