import { shallow } from "enzyme";
import React from "react";
import Banner from "../banner/banner.component";

import * as enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("Create snapshot of banner component", () => {
  expect(shallow(<Banner />)).toMatchSnapshot();
});
