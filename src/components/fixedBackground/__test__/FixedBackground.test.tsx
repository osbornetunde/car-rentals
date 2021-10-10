import { render } from '@testing-library/react';
import FixedBackground from '../index';

describe('header', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<FixedBackground />);
    expect(getByText(/Smooth, Rich & Loud Audio/i)).toBeInTheDocument();
    expect(getByText(/A Bigger Phone/i)).toBeInTheDocument();
  });
});
