import { Box, Text } from '@mantine/core';
import { montserrat } from '../../utils/fonts';
import Stepper from '../atoms/Stepper';
import Title from '../atoms/Title';

interface Props {
  step: number;
  questionText: string;
  description?: string;
}

function StepTitle({ step, questionText, description }: Props) {
  return (
    <Box>
      <Stepper step={step} />
      <Title text={questionText} style={{ color: 'black' }} fontSize={22} />
      {description && (
        <Text
          align="left"
          sx={{
            fontWeight: 'normal',
            color: 'black',
            fontSize: 15,
          }}
          className={montserrat.className}
        >
          {description}
        </Text>
      )}
    </Box>
  );
}

export default StepTitle;
