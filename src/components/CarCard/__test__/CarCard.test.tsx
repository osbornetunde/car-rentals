import { render } from '@testing-library/react';
import CarCard from '../index';

describe('header', () => {
  it('should render without crashing', () => {
    const { getByText } = render(
      <CarCard
        imageUrl="http://img.com"
        title="Hello World"
        marketplacePrice={1000}
        marketplaceOldPrice={2000}
        id="34rt6"
      />
    );
    expect(getByText(/Hello world/i)).toBeInTheDocument();
  });
});
