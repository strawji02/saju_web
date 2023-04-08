import {
  ActionIcon,
  Box,
  Input,
  Stack,
  Step,
  useMantineTheme,
} from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useRouter } from 'next/router';
import React from 'react';
import ArrowLeftButton from '../atoms/ArrowLeftButton';
import Topbar from '../molecules/Topbar';
import Form from '../organism/Form';
import { Dosi, StepInputFormType, StepTitleType } from '../types/StepInput';
import StepTitle from '../molecules/StepTitle';
import NextButton from '../atoms/NextButton';

export interface StepInputTemplateProps {
  topBarComponent: React.ReactNode;
  stepTitleComponent: React.ReactNode;
  formComponent: React.ReactNode;
  nextButtonComponent: React.ReactNode;
}

function StepInputTemplate({ ...component }: StepInputTemplateProps) {
  const {
    topBarComponent,
    stepTitleComponent,
    formComponent,
    nextButtonComponent,
  } = component;

  return (
    <>
      {topBarComponent}
      <Box mt={50} mx={27}>
        <Stack spacing={0}>
          {stepTitleComponent}
          <Box mt={30} mb={64}>
            {formComponent}
          </Box>
          {nextButtonComponent}
        </Stack>
      </Box>
    </>
  );
}

export default StepInputTemplate;
