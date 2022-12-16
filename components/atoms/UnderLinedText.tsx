import { Text } from '@mantine/core';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

function UnderLinedText({ children, ...props }: Props) {
  return (
    <Text
      component="span"
      c="dark"
      sx={(theme) => ({
        boxShadow: `inset 0 -0.55em 0 0 ${theme.fn.rgba('#2d2da8', 0.18)}`,
      })}
    >
      {children}
    </Text>
  );
}

export default UnderLinedText;
