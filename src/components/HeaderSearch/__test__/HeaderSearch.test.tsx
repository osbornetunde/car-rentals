import { render } from '@testing-library/react';
import HeaderSearch from '../index';

describe('header', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<HeaderSearch />);
    expect(getByText(/Car Store/i)).toBeInTheDocument();
  });
});
