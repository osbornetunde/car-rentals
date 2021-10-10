import { render } from '@testing-library/react';

import Sidebar from '../index';

describe('header', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Sidebar />);
    expect(getByText(/Search here.../i)).toBeInTheDocument();
  });
});
