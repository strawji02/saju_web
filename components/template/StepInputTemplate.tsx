import { ActionIcon, Box, Input, Step, useMantineTheme } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { IconArrowLeft } from '@tabler/icons';
import React, { HTMLAttributes } from 'react';
import ArrowLeftButton from '../atoms/ArrowLeftButton';
import GenderSelectButton from '../atoms/GenderSelectButton';
import GenderSelector from '../molecules/GenderSelector';
import Topbar from '../molecules/Topbar';
import StepInput from '../organism/StepInput';
import { StepInputFormType, StepTitleType } from '../types/StepInput';

interface Props {
  step: number;
  title: StepTitleType;
  form: UseFormReturnType<
    StepInputFormType,
    (values: StepInputFormType) => StepInputFormType
  >;
}

function StepInputTemplate({ step, title, form }: Props) {
  return (
    <>
      <Topbar title="사주보기" leftArea={<ArrowLeftButton />} />
      <Box mt={50} mx={27}>
        <StepInput
          form={form}
          step={step}
          disabled={false}
          href={`?step=${step + 1}`}
          title={title}
        />
      </Box>
    </>
  );
}

export default StepInputTemplate;
