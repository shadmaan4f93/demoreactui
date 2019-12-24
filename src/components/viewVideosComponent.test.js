import React from 'react';
import { shallow } from 'enzyme';
import ViewVideosComponent from './viewVideosComponent';

describe("MyComponent", () => {
  it("should render correctly", () => {
    const component = shallow(<ViewVideosComponent />);
  });
  it("should render initial layout", () => {
    // when
    const component = shallow(<ViewVideosComponent />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });
 
  
});
