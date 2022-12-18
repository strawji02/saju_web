import { Text } from '@mantine/core';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  weight?: number;
  size?: number;
  align?: React.CSSProperties['textAlign'];
  left?: boolean;
}
function DefaultText({ color, left, children, ...props }: Props) {
  return (
    <Text align={left ? 'left' : 'center'} {...props} c={color || 'dark'}>
      {children}
    </Text>
  );
}

export default DefaultText;
