import React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import View from './View';
import moment from 'moment';
import '@testing-library/jest-dom/extend-expect';

jest.mock('@plone/volto/helpers/Loadable/Loadable', () => ({
  injectLazyLibs: () => (component) => component,
}));

jest.mock('moment', () => {
  const moment = jest.requireActual('moment');

  return { default: moment };
});

describe('View and Timeline components', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should render empty timeline in edit mode', () => {
    render(<View data={{ items: undefined }} mode="edit" />, container);

    expect(screen.getByText('Add Timeline items')).toBeInTheDocument();
  });

  it('should render timeline item with correct data', () => {
    const item = {
      datetime: '2023-01-01',
      title: 'Test Event',
      description: 'Test Description',
      color: 'blue',
      icon: 'star',
    };
    const data = { items: [item], reversed: false };

    const { getByText } = render(
      <View data={data} mode="view" moment={moment} />,
      container,
    );

    expect(getByText('Test Event')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
    expect(getByText('Jan 1, 2023 12:00 AM')).toBeInTheDocument();
  });

  it('should render timeline item with correct data', () => {
    const item = {
      datetime: '2023-01-01',
      title: 'Test Event',
      description: 'Test Description',
      color: undefined,
      icon: 'star',
    };
    const data = { items: [item], reversed: true, hideTime: true };

    const { getByText } = render(
      <View data={data} mode="view" moment={moment} />,
      container,
    );

    expect(getByText('Test Event')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
    expect(getByText('Jan 1, 2023')).toBeInTheDocument();
  });
});
