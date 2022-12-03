import { Text } from '@mantine/core';
import React, { HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

function Title({ text, children, ...props }: Props) {
  return (
    <Text {...props} style={{ fontFamily: 'Jalnan', ...props.style }}>
      {text}
    </Text>
  );
}

export default Title;
