import { Box, Flex, Stack } from '@mantine/core';
import React, { ReactNode } from 'react';
import CopyrightText from '../molecules/CopyrightText';

interface Props {
  children: ReactNode;
  color?: string;
}

function LayoutTemplate({ children, color }: Props) {
  return (
    <Stack
      style={{ height: '100%', backgroundColor: color }}
      justify="space-between"
    >
      <Box>{children}</Box>
    </Stack>
  );
}

export default LayoutTemplate;
