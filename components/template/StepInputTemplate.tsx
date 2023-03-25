import { ActionIcon, Box, Input, Step, useMantineTheme } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { IconArrowLeft } from '@tabler/icons';
import { useRouter } from 'next/router';
import React, { HTMLAttributes } from 'react';
import ArrowLeftButton from '../atoms/ArrowLeftButton';
import GenderSelectButton from '../atoms/GenderSelectButton';
import GenderSelector from '../molecules/GenderSelector';
import Topbar from '../molecules/Topbar';
import Form from '../organism/Form';
import StepInput from '../organism/StepInput';
import { Dosi, StepInputFormType, StepTitleType } from '../types/StepInput';

interface Props {
  step: number;
  title: StepTitleType;
  form: UseFormReturnType<
    StepInputFormType,
    (values: StepInputFormType) => StepInputFormType
  >;
}

function StepInputTemplate({ step, title, form }: Props) {
  const router = useRouter();
  return (
    <>
      <Topbar
        title="당신을 알려주세요"
        leftArea={
          <ArrowLeftButton
            onClick={() =>
              router.push(step === 1 ? '/' : { query: { step: step - 1 } })
            }
          />
        }
      />
      <Box mt={50} mx={27}>
        <StepInput
          form={form}
          step={step}
          href={{ query: { step: step + 1 } }}
          title={title}
        >
          <Form form={form} step={step} />
        </StepInput>
      </Box>
    </>
  );
}

export default StepInputTemplate;
