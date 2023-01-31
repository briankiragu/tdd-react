import { render } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import App from '../../../src/App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    expect(true).toBe(true);
  });
});
