import { omit } from 'lodash';
import { MouseEvent, useCallback } from 'react';
import { BoxProps } from 'reakit/ts';
import { Box, Button } from 'theme-ui';
import { ClickableOptions, clickablePropNames, useClickable } from '../abstract/Clickable';
import { DisclosureReturnState } from './useDisclosureState';

export type DisclosureOptions = ClickableOptions &
  Pick<DisclosureReturnState, 'id' | 'visible' | 'toggle'>;

export const useDisclosure = (options: DisclosureOptions) => {
  const clickableProps = useClickable(options);
  const { toggle } = options;

  const onClick = useCallback(
    (event: MouseEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      toggle();
    },
    [toggle],
  );

  return {
    ...clickableProps,
    'aria-expanded': !!options.visible,
    'aria-controls': options.id,
    onClick,
  };
};

const disclosurePropNames: Array<keyof DisclosureOptions> = [
  ...clickablePropNames,
  'id',
  'toggle',
  'visible',
];

export function Disclosure(props: DisclosureOptions & BoxProps) {
  const disclosureProps = useDisclosure(props);

  return (
    <Box as={Button} {...disclosureProps} {...omit(props, disclosurePropNames)}>
      {props.children}
    </Box>
  );
}
