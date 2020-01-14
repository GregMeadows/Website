import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

// Create mock scroll method
Object.defineProperty(window, 'scroll', { value: () => {}, writable: true });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
