import { render } from '@testing-library/react';

import BrandCard from '../index';

describe('header', () => {
  it('should render without crashing', () => {
    const { getByText } = render(
      <BrandCard img="http://img.com" name="Hello World" />
    );
    expect(getByText(/Hello world/i)).toBeInTheDocument();
  });
});
