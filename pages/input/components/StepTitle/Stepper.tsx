import { Text } from '@mantine/core';
import { HTMLAttributes } from 'react';
import { montserrat } from '../../../../utils/fonts';

interface Props extends HTMLAttributes<HTMLDivElement> {
  step: number;
}

function Stepper({ step, ...props }: Props) {
  return (
    <Text
      align="left"
      style={{
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        ...props.style,
      }}
      className={montserrat.className}
    >
      STEP {step} OF 4
    </Text>
  );
}

export default Stepper;
