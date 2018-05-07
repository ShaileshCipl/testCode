import { mount, render , shallow} from "enzyme";
import * as React from "react";
import Card from "./Card";

const title = "Approval Result";
const children = "Loan Amount";
const wrapper = mount((
  <Card title="Approval Result"/>
  ));
describe("Card component", () => {
    it("should render its title with children", () => {
      expect(wrapper.contains(<Card title="Approval Result" children={children}/>)).toMatchSnapshot();
    });

    it("should not adopt an invalid label", () => {
        const renderedComponent = shallow(<Card title="Approval Result">card content</Card>);
        expect(renderedComponent.prop("title")).toBeUndefined();
    });
  });
