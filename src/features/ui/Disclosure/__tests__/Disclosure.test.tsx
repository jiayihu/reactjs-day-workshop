import { act, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Disclosure } from '../Disclosure';
import { useDisclosureState } from '../useDisclosureState';

describe('useDisclosureState', () => {
  it('Should allow to change the visibility state', () => {
    const { result } = renderHook(() => useDisclosureState({ visible: false }));

    expect(result.current.visible).toBe(false);

    act(() => {
      result.current.show();
    });

    expect(result.current.visible).toBe(true);

    act(() => {
      result.current.hide();
    });

    expect(result.current.visible).toBe(false);
  });

  it('Should allow to toggle the visibility state', () => {
    const { result } = renderHook(() => useDisclosureState({ visible: false }));

    expect(result.current.visible).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.visible).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.visible).toBe(false);
  });
});

describe('Disclosure', () => {
  it('Should render a toggleable button', () => {
    const toggle = jest.fn();

    render(
      <Disclosure visible={false} toggle={toggle} aria-controls="1, 2">
        Toggle
      </Disclosure>,
    );

    const element = screen.getByRole('button', { name: /toggle/i });

    userEvent.click(element);

    expect(toggle).toHaveBeenCalled();
  });
});
