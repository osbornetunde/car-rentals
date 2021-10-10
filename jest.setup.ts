import { QueryCache } from 'react-query';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

const queryCache = new QueryCache();

afterEach(() => {
  queryCache.clear();
});
