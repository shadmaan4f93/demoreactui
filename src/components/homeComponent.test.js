import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from './homeComponent';

describe("MyComponent", () => {
  it("should render correctly", () => {
    const component = shallow(<HomeComponent />);
  });
  it("should render initial layout", () => {
    // when
    const component = shallow(<HomeComponent />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });
 
  
});
