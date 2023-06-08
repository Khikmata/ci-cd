import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


describe('test App', () => {
  test('render async', async () => {

    screen.debug();
    const asyncData = await screen.findByText(/delectus aut autem/i);
    expect(asyncData).toBeInTheDocument();
    screen.debug();

  });

  test('click event', () => {
    render(<App />)

    const btn = screen.getByTestId<HTMLButtonElement>(/toggleBtn/i);
    expect(btn).toBeInTheDocument();

    expect(btn).toHaveStyle({ color: 'red' })

    expect(screen.queryByText('yo')).toBeNull();
    fireEvent.click(btn)
    expect(screen.getByText('yo')).toBeInTheDocument();
    fireEvent.click(btn)
    expect(screen.queryByText('yo')).toBeNull();
  })

  test('input event', () => {
    render(<App />)

    const input = screen.getByTestId<HTMLInputElement>(/input/i);
    expect(input).toBeInTheDocument();
    expect(input).toContainHTML('');
    fireEvent.input(input, { target: { value: '123' } })
    expect(input).toContainHTML('123')

    userEvent.type(input, '123123')
    expect(input).toContainHTML('123123')
  })
});