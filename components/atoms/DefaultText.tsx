import { Text } from '@mantine/core';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  weight?: number;
  size?: number;
  align?: React.CSSProperties['textAlign'];
  left?: boolean;
  disallowDrag?: boolean;
}
function DefaultText({ color, left, children, disallowDrag, ...props }: Props) {
  return (
    <Text
      align={left ? 'left' : 'center'}
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
