import { ThemeProvider, DefaultTheme } from 'styled-components';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Main from '../src/layout/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme: DefaultTheme = {
  colors: {
    main: '#56CCF2',
    secondary: '#0644CC',
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
export default MyApp;
