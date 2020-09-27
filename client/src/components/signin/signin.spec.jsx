import React from "react";
import { shallow } from "enzyme";
import Signin from "./index";

describe("Sign In form", () => {
  const handleSignin = jest.fn();
  const handleSetRegisterModal = jest.fn();
  const event = { preventDefault: () => {} };

  describe("Form happy path", () => {
    const wrapper = shallow(
      <Signin
        handleSignin={handleSignin}
        handleSetRegisterModal={handleSetRegisterModal}
      />
    );

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should be able to input email", () => {
      const input = wrapper.find("input").at(0);
      input.simulate("change", { target: { value: "camel266@gmail.com" } });

      expect(wrapper.find("input").at(0).props().value).toBe(
        "camel266@gmail.com"
      );
    });

    it("should be able to input password", () => {
      const input = wrapper.find("input").at(1);
      input.simulate("change", { target: { value: "password" } });

      expect(wrapper.find("input").at(1).props().value).toBe("password");
    });

    it("should be able to submit form", () => {
      const form = wrapper.find("form");
      form.simulate("submit", event);
      expect(handleSignin).toHaveBeenCalledWith({
        email: "camel266@gmail.com",
        password: "password",
      });
    });
  });

  describe("Form validation", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Signin
          handleSignin={handleSignin}
          handleSetRegisterModal={handleSetRegisterModal}
        />
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should not submit form if email is missing", () => {
      wrapper
        .find("input")
        .at(1)
        .simulate("change", { target: { value: "password" } });

      const form = wrapper.find("form");
      form.simulate("submit", event);
      expect(handleSignin).not.toHaveBeenCalled();
    });

    it("should not submit form if email does not contain @ symbol", () => {
      wrapper
        .find("input")
        .at(0)
        .simulate("change", { target: { value: "camel266" } });

      wrapper
        .find("input")
        .at(1)
        .simulate("change", { target: { value: "password" } });

      const form = wrapper.find("form");
      form.simulate("submit", event);
      expect(handleSignin).not.toHaveBeenCalled();
    });

    it("should not submit form if password is less than six characters", () => {
      wrapper
        .find("input")
        .at(0)
        .simulate("change", { target: { value: "camel266@gmail.com" } });

      wrapper
        .find("input")
        .at(1)
        .simulate("change", { target: { value: "12345" } });

      const form = wrapper.find("form");
      form.simulate("submit", event);
      expect(handleSignin).not.toHaveBeenCalled();
    });
  });

  describe("Sign in from Register modal", () => {
    const wrapper = shallow(
      <Signin
        handleSignin={handleSignin}
        handleSetRegisterModal={handleSetRegisterModal}
      />
    );

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should be possible to switch to sign in modal", () => {
      wrapper.find("button").simulate("click");
      expect(handleSetRegisterModal).toHaveBeenCalled();
    });
  });
});
