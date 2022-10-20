import { fireEvent, render, screen } from '@testing-library/react';
import { Clickable } from '../Clickable';

describe('Clickable', () => {
  it('Should make an accessible Clickable element', () => {
    const handleClick = jest.fn();

    render(<Clickable onClick={handleClick}>Clickable</Clickable>);

    const element = screen.getByRole('button');

    fireEvent.click(element, { key: 'Enter' });

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // it("Should allow to specify a different element", () => {

  // })
});
