import React from "react";
import { shallow } from "enzyme";
import Store from "./index";

describe("Store", () => {
  describe("store products", () => {
    const wrapper = shallow(<Store />);

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should add items to order", () => {
      let product = wrapper
        .find("StoreProducts")
        .dive()
        .find("Product")
        .at(0)
        .dive();

      product.find("button").find(".add").simulate("click");
      product = wrapper
        .find("StoreProducts")
        .dive()
        .find("Product")
        .at(0)
        .dive();

      expect(product.find("span").text()).toBe("1");
    });

    it("should remove items from order", () => {
      let product = wrapper
        .find("StoreProducts")
        .dive()
        .find("Product")
        .at(0)
        .dive();

      product.find("button").find(".remove").simulate("click");
      product = wrapper
        .find("StoreProducts")
        .dive()
        .find("Product")
        .at(0)
        .dive();

      expect(product.find("span").text()).toBe("0");
    });
  });
});
