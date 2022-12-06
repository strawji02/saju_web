import { ActionIcon, Input, Step, useMantineTheme } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import React from 'react';
import ArrowLeftButton from '../atoms/ArrowLeftButton';
import GenderSelectButton from '../atoms/GenderSelectButton';
import GenderSelector from '../molecules/GenderSelector';
import Topbar from '../molecules/Topbar';
import StepInput from '../organism/StepInput';
import { RenderInputType, StepTitleType } from '../types/StepInput';

interface Props {
  step: number;
}

function StepInputTemplate({ step }: Props) {
  function renderInput(step: number): RenderInputType {
    switch (step) {
      case 1:
        return {
          form: (
            <Input placeholder="이름을 입력해주세요" size="lg" radius="md" />
          ),
          title: { questionText: '당신의 이름은 무엇인가요?' },
        };
      case 2:
        return {
          form: (
            <>
              <GenderSelector />
            </>
          ),
          title: {
            questionText: '당신의 성별을 선택해주세요.',
          },
        };
      case 3:
        return {
          form: <></>,
          title: {
            questionText: '당신의 출생지를 선택해주세요.',
          },
        };
      case 4:
        return {
          form: <></>,
          title: {
            questionText: '생년월일시를 선택해주세요.',
          },
        };
      default:
        return {
          form: <></>,
          title: { questionText: 'error' },
        };
    }
  }

  return (
    <>
      <Topbar title="사주보기" leftArea={<ArrowLeftButton />} />
      <StepInput
        step={step}
        disabled={false}
        form={<>{renderInput(step).form}</>}
        href={`?step=${step + 1}`}
        title={renderInput(step).title}
      />
    </>
  );
}

export default StepInputTemplate;
