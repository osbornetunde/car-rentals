import { render } from '@testing-library/react';
import Header from '../index';

describe('header', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Header />);
    expect(getByText(/Offer Zone Top Deals & Discounts/i)).toBeInTheDocument();
  });
});
