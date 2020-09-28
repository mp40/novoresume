import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("The Client App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  describe("Register Modal", () => {
    const wrapper = shallow(<App />);

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should open the Register form in a modal", () => {
      expect(wrapper.find("Register").exists()).toBe(false);
      const registerButton = wrapper.find("Header").dive().find(".register");
      registerButton.simulate("click");

      expect(wrapper.find("Register").exists()).toBe(true);
    });
  });

  describe("Sign In Modal", () => {
    const wrapper = shallow(<App />);

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should open the Sign In form in a modal", () => {
      expect(wrapper.find("Signin").exists()).toBe(false);
      const signinButton = wrapper.find("Header").dive().find(".signin");
      signinButton.simulate("click");

      expect(wrapper.find("Signin").exists()).toBe(true);
    });
  });
});
