import { Text, TextProps } from '@mantine/core';
import React, { HTMLAttributes } from 'react';

interface Props extends TextProps {
  text?: string;
  fontSize?: number;
  component?: any;
}

function Title({ text, fontSize, children, component, ...props }: Props) {
  return (
    <Text
      align="left"
      {...props}
      sx={{ fontSize, fontFamily: 'Jalnan', ...props.sx }}
      component={component}
      // className={jalnan.className}
    >
      {text || children}
    </Text>
  );
}

export default Title;
