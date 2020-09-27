import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("The Client App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
