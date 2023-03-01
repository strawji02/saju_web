import { Divider, DividerProps } from '@mantine/core';
import React from 'react';

interface Props extends DividerProps {}

function ShortDivider({ ...props }: Props) {
  return (
    <Divider
      w={24}
      style={{ borderTopWidth: 2, borderTopColor: '#2d2da8' }}
      {...props}
    />
  );
}

export default ShortDivider;
