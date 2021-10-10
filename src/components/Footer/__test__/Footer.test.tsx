import { render } from '@testing-library/react';
import Footer from '../index';

describe('header', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText(
        /© 2018 Electro Store. All rights reserved | Design by W3layouts./i
      )
    ).toBeInTheDocument();
  });
});
