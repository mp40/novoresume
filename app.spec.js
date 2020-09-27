const { setupExpressServer } = require("./app");

const mongoose = require("mongoose");
const request = require("supertest");
const app = setupExpressServer();

const db = require("./db");

const bcrypt = require("bcrypt");

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

  describe("Signing Up", () => {
    beforeEach(() => {
      req = request(app);

      stubPost = jest.spyOn(db, "addUser").mockImplementation(() => {
        return Promise.resolve();
      });
    });

    afterEach(() => {
      stubPost.mockRestore();
    });

    it("should add valid users", async () => {
      const user = {
        firstName: "John",
        lastName: "Test",
        email: "testSan@gmail.com",
        password: "123456",
      };

      const res = await req.post("/signup").send(user);
      expect(stubPost).toHaveBeenCalled();
    });

    it("should throw error if user firstName not valid", async () => {
      const user = {
        firstName: " ",
        lastName: "Test",
        email: "testSan@gmail.com",
        password: "123456",
      };

      const res = await req.post("/signup").send(user);

      expect(res.body.message).toBe("Invalid User Details");
      expect(stubPost).not.toHaveBeenCalled();
    });

    it("should throw error if user lastName not valid", async () => {
      const user = {
        firstName: "John",
        lastName: " ",
        email: "testSan@gmail.com",
        password: "123456",
      };

      const res = await req.post("/signup").send(user);

      expect(res.body.message).toBe("Invalid User Details");
      expect(stubPost).not.toHaveBeenCalled();
    });

    it("should throw error if user email not valid", async () => {
      const user = {
        firstName: "John",
        lastName: "Test",
        email: " ",
        password: "123456",
      };

      const res = await req.post("/signup").send(user);

      expect(res.body.message).toBe("Invalid User Details");
      expect(stubPost).not.toHaveBeenCalled();
    });

    it("should throw error if user password not valid", async () => {
      const user = {
        firstName: "John",
        lastName: "Test",
        email: "testSan@gmail.com",
        password: "12345",
      };

      const res = await req.post("/signup").send(user);

      expect(res.body.message).toBe("Invalid User Details");
      expect(stubPost).not.toHaveBeenCalled();
    });

    it("should return error if password is in use", async () => {
      const user = {
        firstName: "John",
        lastName: "Test",
        email: "testSan@gmail.com",
        password: "123456",
      };

      const stubGetEmail = jest
        .spyOn(db, "getUserByEmail")
        .mockImplementation(() => {
          return Promise.resolve(user);
        });

      const res = await req.post("/signup").send(user);

      expect(stubGetEmail).toHaveBeenCalledWith(user.email);
      expect(res.body.message).toBe("Email In Use");
      expect(stubPost).not.toHaveBeenCalled();

      stubGetEmail.mockRestore();
    });

    it("should hash plain text password", async () => {
      const user = {
        firstName: "John",
        lastName: "Test",
        email: "testSan@gmail.com",
        password: "123456",
      };

      const stubHash = jest.spyOn(bcrypt, "hash").mockImplementation(() => {
        return Promise.resolve("hashed_password");
      });

      const res = await req.post("/signup").send(user);

      expect(stubHash).toHaveBeenCalledWith("123456", 10);

      expect(stubPost).toHaveBeenCalledWith({
        firstName: "John",
        lastName: "Test",
        email: "testSan@gmail.com",
        password: "hashed_password",
      });

      stubHash.mockRestore();
    });
  });
});
