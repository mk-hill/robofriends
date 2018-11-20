import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

describe('MainPage', () => {
  it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [{ id: 1, name: 'John', email: 'aliens@asd.com' }],
      searchField: 'o',
      isPending: false,
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filterRobots()).toEqual([
      { id: 1, name: 'John', email: 'aliens@asd.com' },
    ]);
  });

  it('filters robots correctly with no matches', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [{ id: 1, name: 'John', email: 'aliens@asd.com' }],
      searchField: 'a',
      isPending: false,
    };
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filterRobots()).toEqual([]);
  });

  it('renders loading message correctly', () => {
    const mockProps4 = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true,
    };
    const wrapper4 = shallow(<MainPage {...mockProps4} />);
    expect(wrapper4).toMatchSnapshot();
  });
});
