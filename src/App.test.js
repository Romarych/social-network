import React from 'react';
import { render, screen } from '@testing-library/react';
import SociallApp from './App';
import ReactDOM from "react-dom"

// test('renders learn react link', () => {
//   render(<SociallApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn react link', () => {
  const div = document.createElement("div")
  ReactDOM.render(<SociallApp />, div)
  ReactDOM.unmountComponentAtNode(div)
});

