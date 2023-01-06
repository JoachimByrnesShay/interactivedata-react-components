import { render, screen } from '@testing-library/react';
import App from '../components/App/App.js';

test('renders CURRENCY VISUALIZATION text', () => {
  render(<App />);
  const textElement = screen.getByText(/CURRENCY VISUALIZATION/i);
 },  
);

 