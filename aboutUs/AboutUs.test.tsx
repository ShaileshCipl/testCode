import { shallow } from "enzyme";
import * as React from "react";
import { shallowWithIntl } from "../../../../tests/helpers/intl";
import AboutUs from "./AboutUs";

describe("AboutUs container", () => {
  it("should render correctly", () => {
    const wrapper = shallowWithIntl(<AboutUs />);
    expect(wrapper).toMatchSnapshot();
  });
});
