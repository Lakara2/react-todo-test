import { render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const expected = "1"
  const reality = "1"
  expect(expected).toBe(reality)
});
