import { Text } from '@mantine/core';
import React, { HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
  fontSize?: number;
}

function Title({ text, fontSize, children, ...props }: Props) {
  return (
    <Text
      align="left"
      {...props}
      style={{ fontFamily: 'Jalnan', fontSize, ...props.style }}
    >
      {text}
    </Text>
  );
}

export default Title;
