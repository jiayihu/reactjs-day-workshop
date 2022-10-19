import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import App from './App';
import { AuthProvider } from './features/auth/AuthContext';
import { store } from './features/store/store';
import theme from './theme';

const queryClient = new QueryClient();

function Wrapper(props: PropsWithRequiredChildren<unknown>) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
          </ThemeProvider>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
}

describe('App', () => {
  it('Should redirect to authenticate page', async () => {
    render(<App />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    });
  });
});
