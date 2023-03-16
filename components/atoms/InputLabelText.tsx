import { Text, TextProps } from '@mantine/core';
import { HTMLAttributes } from 'react';

interface Props extends TextProps {
  text?: string;
  fontSize?: number;
}

function InputLabelText({ children, fontSize = 15, text, ...props }: Props) {
  return (
    <Text mb={2} sx={{ fontSize, fontFamily: 'Jalnan', ...props.sx }}>
      {children || text}
    </Text>
  );
}

export default InputLabelText;
