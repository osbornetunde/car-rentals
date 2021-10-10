import { render } from '@testing-library/react';
import Nav from '../index';

describe('Nav', () => {
  it('shoould render without crashing', () => {
    const { getByText } = render(<Nav />);
    expect(getByText(/All categories/i)).toBeInTheDocument();
  });
});
