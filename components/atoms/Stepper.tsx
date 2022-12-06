import { Text } from '@mantine/core';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  step: number;
}

function Stepper({ step, ...props }: Props) {
  return (
    <Text
      align="left"
      style={{
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        ...props.style,
      }}
    >
      STEP {step} OF 4
    </Text>
  );
}

export default Stepper;
