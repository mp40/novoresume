import React from "react";
import { shallow } from "enzyme";

import HomeRegisterBanner from "./index";

describe("HomeRegisterBanner", () => {
  let wrapper;
  const handleSetRegisterModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <HomeRegisterBanner handleSetRegisterModal={handleSetRegisterModal} />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should open the register modal", () => {
    wrapper.find("button").simulate("click");

    expect(handleSetRegisterModal).toHaveBeenCalled();
  });
});
