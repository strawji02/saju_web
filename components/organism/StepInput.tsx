/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { UrlObject } from 'url';
import NextButton from '../atoms/NextButton';
import StepTitle from '../molecules/StepTitle';
import { StepInputFormType, StepTitleType } from '../types/StepInput';
import { PropsWithChildren } from 'react';

interface Props {
  href: string | UrlObject;
  step: number;
  title: StepTitleType;
  form: UseFormReturnType<
    StepInputFormType,
    (values: StepInputFormType) => StepInputFormType
  >;
}

function StepInput({
  href,
  step,
  title,
  form,
  children,
}: PropsWithChildren<Props>) {
  const isLastStep = step === 4;

  return (
    <Stack spacing={0}>
      <StepTitle step={step} {...title} />
      <Box mt={30} mb={64}>
        {children}
      </Box>
      <NextButton
        onClick={(e) => {
          if (form.validate().hasErrors) e.preventDefault();
        }}
        disabled={!form.isValid()}
        href={isLastStep ? '/result' : href}
        btnText={isLastStep ? '결과보기' : '다음'}
      />
    </Stack>
  );
}

export default StepInput;
