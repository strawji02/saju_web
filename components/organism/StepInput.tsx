/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import { UrlObject } from 'url';
import { getResult } from '../api/result';
import NextButton from '../atoms/NextButton';
import StepTitle from '../molecules/StepTitle';
import { useUserResultState } from '../../utils/state';
import {
  ResultParams,
  StepInputFormType,
  StepTitleType,
} from '../types/StepInput';
import Form from './Form';
import { useEffect } from 'react';

interface Props {
  href: string | UrlObject;
  step: number;
  title: StepTitleType;
  form: UseFormReturnType<
    StepInputFormType,
    (values: StepInputFormType) => StepInputFormType
  >;
}

function StepInput({ href, step, title, form }: Props) {
  const router = useRouter();
  const { setResult } = useUserResultState();

  const params = {
    gender: form.values.gender || '',
    birthplace: form.values.birthPlace,
    calendar: form.values.calendar ? '음력' : '양력',
    year: form.values.birthDate.getFullYear(),
    month: form.values.birthDate.getMonth() + 1,
    day: form.values.birthDate.getDate(),
    hour: form.values.birthTime.getHours(),
    min: form.values.birthTime.getMinutes(),
    intercalation: form.values.intercalation ? '윤달' : null,
  };

  const resultMutate = useMutation(
    'get-result',
    async (params: ResultParams) => getResult(params),
    {
      onSuccess: (data) => {
        setResult(data);
        router.push('/result');
      },
    }
  );

  const isLastStep = step === 4;

  return (
    <Stack spacing={0}>
      <StepTitle step={step} {...title} />
      <Box mt={30} mb={64}>
        <Form form={form} step={step} />
      </Box>
      <NextButton
        onClick={(e) => {
          if (isLastStep) resultMutate.mutate(params);
          if (form.validate().hasErrors) e.preventDefault();
        }}
        disabled={!form.isValid()}
        href={isLastStep ? { query: { step: 4 } } : href}
        isLoading={resultMutate.isLoading}
        btnText={isLastStep ? '결과보기' : '다음'}
      />
    </Stack>
  );
}

export default StepInput;
