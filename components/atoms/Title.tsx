import { Text } from '@mantine/core';
import React, { HTMLAttributes } from 'react';
import { jalnan } from '../../utils/fonts';

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
  fontSize?: number;
}

function Title({ text, fontSize, children, ...props }: Props) {
  return (
    <Text
      align="left"
      {...props}
      style={{ fontSize, ...props.style }}
      className={jalnan.className}
    >
      {text}
    </Text>
  );
}

export default Title;
