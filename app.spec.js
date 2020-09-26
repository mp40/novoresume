const { setupExpressServer } = require("./app");

const mongoose = require("mongoose");
const request = require("supertest");
const app = setupExpressServer();

const db = require("./db");

const { users } = require("./fixtures/users");

describe("The Server", () => {
  let req;

  afterAll(() => {
    mongoose.connection.close();
  });

  describe("GET /users", () => {
    let stubUsers;

    beforeEach(() => {
      req = request(app);

      stubUsers = jest.spyOn(db, "getUsers").mockImplementation(() => {
        return Promise.resolve(users);
      });
    });

    afterEach(() => {
      stubUsers.mockRestore();
    });

    it("should return all users", async () => {
      const res = await req.get("/users");

      expect(stubUsers).toHaveBeenCalled();
      expect(JSON.parse(res.text).results).toEqual(users);
    });

    it("should return user by id", async () => {
      const userId = "1a";

      const res = await req.get(`/users/${userId}`);

      expect(stubUsers).toHaveBeenCalled();
      expect(JSON.parse(res.text)).toEqual(users[1]);
    });
  });

  describe("POST /users", () => {
    beforeEach(() => {
      req = request(app);
    });

    it("should add user", async () => {
      const stubPost = jest.spyOn(db, "addUser").mockImplementation(() => {
        return Promise.resolve(users[0]);
      });

      const res = await req.post("/users").send(users[0]);

      expect(stubPost).toHaveBeenCalledWith(users[0]);
      expect(JSON.parse(res.text)).toEqual(users[0]);

      stubPost.mockRestore();
    });
  });

  describe("PUT /users", () => {
    beforeEach(() => {
      req = request(app);
    });

    it("should update user by id", async () => {
      const stubPut = jest.spyOn(db, "updateUser").mockImplementation(() => {
        return Promise.resolve();
      });

      const userId = "1a";

      const res = await req.put(`/users/${userId}`).send(users[0]);

      expect(stubPut).toHaveBeenCalledWith(userId, users[0]);
      expect(res.status).toBe(200);

      stubPut.mockRestore();
    });
  });

  describe("DELETE /users", () => {
    beforeEach(() => {
      req = request(app);
    });

    it("should delete user by id", async () => {
      const stubDelete = jest.spyOn(db, "deleteUser").mockImplementation(() => {
        return Promise.resolve();
      });

      const userId = "1a";

      const res = await req.delete(`/users/${userId}`).send();
      expect(stubDelete).toHaveBeenCalledWith(userId);
      expect(res.status).toBe(200);

      stubDelete.mockRestore();
    });
  });
});
