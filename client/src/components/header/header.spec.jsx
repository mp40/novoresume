import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Header", () => {
  const handleSetRegisterModal = jest.fn();
  const handleSetSigninModal = jest.fn();
  const handleSignOut = jest.fn();

  describe("Signed Out", () => {
    const wrapper = shallow(
      <Header
        handleSetRegisterModal={handleSetRegisterModal}
        handleSetSigninModal={handleSetSigninModal}
        handleSignOut={handleSignOut}
        signedIn={false}
      />
    );

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should only render the register and sign in buttons", () => {
      expect(wrapper.find(".register").exists()).toBe(true);
      expect(wrapper.find(".signin").exists()).toBe(true);
      expect(wrapper.find(".signout").exists()).toBe(false);
    });

    it("should open register modal when register button clicked", () => {
      wrapper.find(".register").simulate("click");
      expect(handleSetRegisterModal).toHaveBeenCalled();
    });

    it("should open register modal when register button clicked", () => {
      wrapper.find(".signin").simulate("click");
      expect(handleSetSigninModal).toHaveBeenCalled();
    });
  });

  describe("Signed In", () => {
    const wrapper = shallow(
      <Header
        handleSetRegisterModal={handleSetRegisterModal}
        handleSetSigninModal={handleSetSigninModal}
        handleSignOut={handleSignOut}
        signedIn={true}
      />
    );

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should only render the sign out button", () => {
      expect(wrapper.find(".register").exists()).toBe(false);
      expect(wrapper.find(".signin").exists()).toBe(false);
      expect(wrapper.find(".signout").exists()).toBe(true);
    });

    it("should be possible to sign out", () => {
      wrapper.find(".signout").simulate("click");
      expect(handleSignOut).toHaveBeenCalled();
    });
  });
});
