import { fetchSignup, fetchSignin } from "./index";

describe("Calling the Server", () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  it("should post new user to /signup", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        text: () =>
          JSON.stringify({
            _id: "1a",
            firstName: "John",
            lastName: "Test",
            email: "testSan@gmail.com",
            password: "hashed_password",
          }),
      });
    });

    const user = {
      firstName: "John",
      lastName: "Test",
      email: "testSan@gmail.com",
      password: "password",
    };

    const res = await fetchSignup(user);

    expect(fetch).toHaveBeenCalled();

    expect(res).toEqual({
      _id: "1a",
      firstName: "John",
      lastName: "Test",
      email: "testSan@gmail.com",
      password: "hashed_password",
    });
  });

  it("should return error message on post /signup failure", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject("error");
    });

    const user = {
      firstName: "John",
      lastName: "Test",
      email: "testSan@gmail.com",
      password: "password",
    };

    const res = await fetchSignup(user);

    expect(fetch).toHaveBeenCalled();

    expect(res).toEqual({ error: "error", message: "Signup Error" });
  });

  it("should post new user to /signin", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        text: () => JSON.stringify({ message: "Signed In" }),
      });
    });

    const user = {
      email: "testSan@gmail.com",
      password: "password",
    };

    const res = await fetchSignin(user);

    expect(fetch).toHaveBeenCalled();

    expect(res).toEqual({
      message: "Signed In",
    });
  });

  it("should return error message on post /signfailure", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject("error");
    });

    const user = {
      email: "testSan@gmail.com",
      password: "password",
    };

    const res = await fetchSignin(user);

    expect(fetch).toHaveBeenCalled();

    expect(res).toEqual({ error: "error", message: "Signin Error" });
  });
});
