import { fetchSignup, fetchSignin } from "./index";

describe("Calling the Server", () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  it("should post new user to /signup", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve(
        JSON.stringify({
          _id: "1a",
          firstName: "John",
          lastName: "Test",
          email: "testSan@gmail.com",
          password: "hashed_password",
        })
      );
    });

    const user = {
      firstName: "John",
      lastName: "Test",
      email: "testSan@gmail.com",
      password: "password",
    };

    const res = await fetchSignup(user);

    expect(JSON.parse(res)).toEqual({
      _id: "1a",
      firstName: "John",
      lastName: "Test",
      email: "testSan@gmail.com",
      password: "hashed_password",
    });
  });

  it("should return error message on post /signup failure", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject();
    });

    const user = {
      firstName: "John",
      lastName: "Test",
      email: "testSan@gmail.com",
      password: "password",
    };

    const res = await fetchSignup(user);

    expect(res).toEqual("Signup Error");
  });

  it("should post new user to /signin", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve(
        JSON.stringify({
          message: "Signed In",
        })
      );
    });

    const user = {
      email: "testSan@gmail.com",
      password: "password",
    };

    const res = await fetchSignin(user);

    expect(JSON.parse(res)).toEqual({
      message: "Signed In",
    });
  });

  it("should return error message on post /signin failure", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject();
    });

    const user = {
      email: "testSan@gmail.com",
      password: "password",
    };

    const res = await fetchSignin(user);

    expect(res).toEqual("Signin Error");
  });
});
