import { Box, Stack } from '@mantine/core';
import NextButton from '../atoms/NextButton';
import StepTitle from '../molecules/StepTitle';
import { StepTitleType } from '../types/StepInput';

interface Props {
  form: React.ReactNode;
  href: string;
  disabled: boolean;
  step: number;
  title: StepTitleType;
}

function StepInput({ form, href, disabled, step, title }: Props) {
  return (
    <Stack mt={50} mx={27} spacing={0}>
      <StepTitle step={step} {...title} />
      <Box mt={30} mb={64}>
        {form}
      </Box>
      <NextButton disabled={disabled} href={href} btnText="다음" />
    </Stack>
  );
}

export default StepInput;
