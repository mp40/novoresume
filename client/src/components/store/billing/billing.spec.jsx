import React from "react";
import { shallow } from "enzyme";
import StoreBilling from "./index";

describe("StoreBilling", () => {
  const billingDetails = {
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    telephone: "",
    email: "",
  };

  const handleUpdateBillingDetails = jest.fn();

  const wrapper = shallow(
    <StoreBilling
      billingDetails={billingDetails}
      handleUpdateBillingDetails={handleUpdateBillingDetails}
    />
  );

  const event = { preventDefault: () => {} };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should update input on change", () => {
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "Ozzy" } });

    expect(handleUpdateBillingDetails).toHaveBeenCalledWith(
      "firstName",
      "Ozzy"
    );
  });
});
