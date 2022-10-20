/**
 * const { visible, show, hide } = useDisclosureState({  })
 */

import { useCallback, useId, useState } from 'react';

export type DisclosureState = {
  id?: string;
  visible: boolean;
};

export type DisclosureReturnState = DisclosureState & {
  show: () => void;
  hide: () => void;
  toggle: () => void;
};

export function useDisclosureState(initialState: DisclosureState): DisclosureReturnState {
  const baseId = useId();
  const [visible, setVisible] = useState(initialState.visible);

  const show = useCallback(() => {
    setVisible(true);
  }, []);

  const hide = useCallback(() => {
    setVisible(false);
  }, []);

  const toggle = useCallback(() => {
    setVisible((visible) => !visible);
  }, []);

  return {
    id: initialState.id ?? baseId,
    visible,
    show,
    hide,
    toggle,
  };
}
