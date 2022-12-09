import { Box, Stack } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import NextButton from '../atoms/NextButton';
import StepTitle from '../molecules/StepTitle';
import { StepInputFormType, StepTitleType } from '../types/StepInput';
import Form from './Form';

interface Props {
  href: string;
  step: number;
  title: StepTitleType;
  form: UseFormReturnType<
    StepInputFormType,
    (values: StepInputFormType) => StepInputFormType
  >;
}

function StepInput({ href, step, title, form }: Props) {
  return (
    <Stack spacing={0}>
      <StepTitle step={step} {...title} />
      <Box mt={30} mb={64}>
        <Form form={form} step={step} />
      </Box>
      <NextButton
        onClick={(e) => {
          if (form.validate().hasErrors) e.preventDefault();
        }}
        disabled={!form.isValid()}
        href={href}
        btnText={step === 4 ? '결과보기' : '다음'}
      />
    </Stack>
  );
}

export default StepInput;
