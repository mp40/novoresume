import React from "react";
import { shallow } from "enzyme";

import HomeCallToActionBanner from "./index";

describe("HomeCallToActionBanner", () => {
  let wrapper;
  const handleSetRegisterModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <HomeCallToActionBanner handleSetRegisterModal={handleSetRegisterModal} />
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
