import { Text, TextProps } from '@mantine/core';
import { ElementType, HTMLAttributes } from 'react';

interface Props extends TextProps {
  disallowDrag?: boolean;
  component?: any;
}
function DefaultText({ color, children, disallowDrag, ...props }: Props) {
  return (
    <Text
      sx={
        disallowDrag
          ? {
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none',
              msUserSelect: 'none',
              MozUserSelect: 'none',
            }
          : undefined
      }
      {...props}
      c={color || 'dark'}
    >
      {children}
    </Text>
  );
}

export default DefaultText;
