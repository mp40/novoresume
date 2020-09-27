import { wiringTest } from "./index";

describe("Calling the API", () => {
  it("should pass wring test", () => {
    expect(wiringTest()).toBe("working");
  });
});
