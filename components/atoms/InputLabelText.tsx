import { Text } from '@mantine/core';
import { HTMLAttributes } from 'react';
import { jalnan } from '../../utils/fonts';

interface Props extends HTMLAttributes<HTMLDivElement> {
  text?: string;
}

function InputLabelText({ children, text, ...props }: Props) {
  return (
    <Text mb={2} className={jalnan.className} style={{ fontSize: 15 }}>
      {children || text}
    </Text>
  );
}

export default InputLabelText;
