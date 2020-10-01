import React from "react";
import { shallow } from "enzyme";
import Product from "./index";

describe("Product", () => {
  const product = {
    key: "item1",
    heading: "plceholder heading",
    subHeading: "placeholder subHeading",
    text: "placeholder text",
    price: "6.66",
  };
  const handleAddItem = jest.fn();
  const handleRemoveItem = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be possible to add product item", () => {
    const wrapper = shallow(
      <Product
        product={product}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
        quantity={1}
      />
    );

    wrapper.find(".add").simulate("click");

    expect(handleAddItem).toHaveBeenCalledWith(product.key);
  });

  it("should be possible to remove product item", () => {
    const wrapper = shallow(
      <Product
        product={product}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
        quantity={1}
      />
    );

    wrapper.find(".remove").simulate("click");

    expect(handleRemoveItem).toHaveBeenCalledWith(product.key);
  });

  it("should not be possible to have less than 0 items", () => {
    const wrapper = shallow(
      <Product
        product={product}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
        quantity={0}
      />
    );

    wrapper.find(".remove").simulate("click");

    expect(handleRemoveItem).not.toHaveBeenCalled();
  });
});
