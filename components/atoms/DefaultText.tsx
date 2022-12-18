import { Text } from '@mantine/core';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  weight?: number;
  size?: number;
  align?: React.CSSProperties['textAlign'];
  fontFamily?: string;
  left?: boolean;
}
function DefaultText({ color, left, fontFamily, children, ...props }: Props) {
  return (
    <Text
      align={left ? 'left' : 'center'}
      sx={{
        fontFamily,
      }}
      {...props}
      c={color || 'dark'}
    >
      {children}
    </Text>
  );
}

export default DefaultText;
