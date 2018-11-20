// import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
  const mockRobots = [
    { id: 1, name: 'John', username: 'asd', email: 'aliens@asd.com' },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
