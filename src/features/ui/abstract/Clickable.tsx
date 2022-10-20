/**
 * <Clickable>Click me</Clickable>
 *
 * <Clickable as="div">Click me</Clickable>
 *
 * <Clickable as={Button}></Clickable>
 *
 *
 */

import {
  HTMLAttributes,
  KeyboardEvent,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Box } from 'theme-ui';

function supportsDisabledAttribute(element: HTMLElement) {
  return ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName);
}

function isNativeTabbable(element: HTMLElement) {
  return ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A'].includes(element.tagName);
}

function isNativeClick(event: KeyboardEvent<HTMLElement>) {
  const element = event.currentTarget;

  if (!event.isTrusted) {
    return false;
  }

  return (
    element.tagName === 'BUTTON' ||
    element.tagName === 'TEXTAREA' ||
    element.tagName === 'A' ||
    element.tagName === 'SELECT'
  );
}

function getTabIndex(element: HTMLElement, options: ClickableOptions) {
  if (options.disabled && !options.focusable) {
    return undefined;
  }

  if (isNativeTabbable(element)) {
    return undefined;
  }

  return element.tabIndex || 0;
}

export type ClickableOptions = {
  disabled?: boolean;
  focusable?: boolean;
};

export type ClickableProps = HTMLAttributes<HTMLElement> & {
  ref: RefObject<HTMLElement>;
  disabled?: boolean;
};

export const useClickable = (options: ClickableOptions): ClickableProps => {
  const ref = useRef<HTMLElement>(null);
  const [, forceRender] = useState(0);

  useEffect(() => {
    forceRender((i) => i + 1);
  }, []);

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (options.disabled || event.defaultPrevented || event.currentTarget !== event.target) {
        return;
      }

      const isEnter = event.key === 'Enter';

      if (isEnter) {
        if (isNativeClick(event)) {
          return;
        }

        event.preventDefault();
        event.currentTarget.click();
      }
    },
    [options.disabled],
  );

  return {
    ref,
    disabled:
      options.disabled &&
      !options.focusable &&
      ref.current &&
      supportsDisabledAttribute(ref.current)
        ? true
        : false,
    tabIndex: ref.current ? getTabIndex(ref.current, options) : undefined,
    role: ref.current && ref.current.tagName !== 'BUTTON' ? 'button' : undefined,
    onKeyDown,
  };
};

export type Props = ClickableOptions & HTMLAttributes<HTMLElement>;

export function Clickable(props: Props) {
  const clickableProps = useClickable(props);

  return (
    <Box {...clickableProps} {...props}>
      {props.children}
    </Box>
  );
}
