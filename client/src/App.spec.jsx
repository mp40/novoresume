import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("The Client App", () => {
  describe("Register Modal", () => {
    const wrapper = shallow(<App />);

    it("should open the Register form in a modal", () => {
      expect(wrapper.find("Register").exists()).toBe(false);
      const registerButton = wrapper.find("Header").dive().find(".register");
      registerButton.simulate("click");

      expect(wrapper.find("Register").exists()).toBe(true);
    });

    it("should close the Register modal and open Sign In modal", () => {
      wrapper.find("Register").dive().find("button").simulate("click");

      expect(wrapper.find("Register").exists()).toBe(false);
      expect(wrapper.find("Signin").exists()).toBe(true);
    });
  });

  describe("Sign In Modal", () => {
    const wrapper = shallow(<App />);

    it("should open the Sign In form in a modal", () => {
      expect(wrapper.find("Signin").exists()).toBe(false);
      const signinButton = wrapper.find("Header").dive().find(".signin");
      signinButton.simulate("click");

      expect(wrapper.find("Signin").exists()).toBe(true);
    });

    it("should close the Sign In modal and open Register modal", () => {
      wrapper.find("Signin").dive().find("button").simulate("click");

      expect(wrapper.find("Signin").exists()).toBe(false);
      expect(wrapper.find("Register").exists()).toBe(true);
    });
  });

  describe("Registering", () => {
    const wrapper = shallow(<App />);

    it("should be possible to register", () => {});
  });
});
