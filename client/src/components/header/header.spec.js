import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Header", () => {
  const handleSetRegisterModal = jest.fn();
  const handleSetSigninModal = jest.fn();

  const wrapper = shallow(
    <Header
      handleSetRegisterModal={handleSetRegisterModal}
      handleSetSigninModal={handleSetSigninModal}
    />
  );

  afterEach(() => {
    jest.clearAllMocks();
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
