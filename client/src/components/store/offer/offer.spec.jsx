import React from "react";
import { shallow } from "enzyme";
import StoreOffer from "./index";

describe("Store Offer", () => {
  const handleOrder = jest.fn();

  const wrapper = shallow(<StoreOffer handleOrder={handleOrder} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should generate pdf when button clicked", () => {
    wrapper.find("button").simulate("click");

    expect(handleOrder).toHaveBeenCalled();
  });
});
