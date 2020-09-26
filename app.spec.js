const { setupExpressServer } = require("./app");

const mongoose = require("mongoose");
const request = require("supertest");
const app = setupExpressServer();

const db = require("./db");

describe("The Server", () => {
  let req;

  describe("GET /users", () => {
    beforeEach(() => {
      req = request(app);
    });

    afterAll(() => {
      mongoose.connection.close();
    });

    it("should return all users", async () => {
      const stubUsers = jest.spyOn(db, "getUsers").mockImplementation(() => {
        return Promise.resolve([]);
      });

      const res = await req.get("/users");
      console.log(res.text);
      expect(stubUsers).toHaveBeenCalled();
      expect(JSON.parse(res.text).results).toEqual([]);

      stubUsers.mockRestore();
    });
  });
});
