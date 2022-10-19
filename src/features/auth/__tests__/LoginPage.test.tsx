import { render, screen } from '@testing-library/react';
import { LoginPage } from '../LoginPage';

describe('LoginPage', () => {
  it('should render and display inputs and buttons to login and register', () => {
    render(<LoginPage />);

    expect(screen.getByRole('textbox', { name: /Email/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Register/i })).toBeInTheDocument();
  });

  it('should render and displaybuttons to login with external providers', () => {
    render(<LoginPage />);

    expect(screen.getByRole('button', { name: /Google/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /GitHub/i })).toBeInTheDocument();
  });
});
