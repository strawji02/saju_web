import { Text, UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import React from 'react';

interface Props extends UnstyledButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

function MenuButton({ children, ...props }: Props) {
  return (
    <UnstyledButton {...props}>
      <Text c="dark" fz={21} fw={500}>
        {children}
      </Text>
    </UnstyledButton>
  );
}

export default MenuButton;
