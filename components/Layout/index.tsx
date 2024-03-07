import { Box, Stack } from '@mantine/core';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  color?: string;
}

function Layout({ children, color }: Props) {
  return (
    <Stack
      style={{ height: '100%', backgroundColor: color }}
      justify="space-between"
    >
      <Box>{children}</Box>
    </Stack>
  );
}

export default Layout;
