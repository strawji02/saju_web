import { useForm } from '@mantine/form';
import axios from 'axios';
import _ from 'lodash';
import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import StepInputTemplate, {
  StepInputTemplateProps,
} from '../components/template/StepInputTemplate';
import {
  StepInputFormType,
  StepTitleType,
} from '../components/types/StepInput';
import { useUserResultState } from '../utils/state';
import { toStringByFormatting } from '../utils/utils';
import LayoutTemplate from '../components/template/LayoutTemplate';
import Topbar from '../components/molecules/Topbar';
import ArrowLeftButton from '../components/atoms/ArrowLeftButton';
import StepTitle from '../components/molecules/StepTitle';
import Form from '../components/organism/Form';
import NextButton from '../components/atoms/NextButton';

function Step() {
  const { error, removeError, userData, setUserData, removeUserData } =
    useUserResultState();
  const router = useRouter();
  const queryStep = router.query['step'];
  const step = typeof queryStep === 'string' ? parseInt(queryStep) : undefined;
  const isLastStep = step === 4;

  const today = new Date();

  const form = useForm<StepInputFormType>({
    initialValues: {
      name: '',
      gender: undefined,
      birthPlace: '',
      birthDate: '',
      birthTime: toStringByFormatting({ source: today, isTime: true }),
      calendar: false,
      intercalation: false,
      termsOfService: false,
    },
    validate: (values) => {
      switch (step) {
        case 1:
          return {
            name: values.name.length < 1 ? true : null,
          };
        case 2:
          return {
            gender: values.gender ? null : '성별을 선택해주세요',
          };
        case 3:
          return {
            birthPlace: values.birthPlace ? null : true,
          };
        default:
          const dateString = values.birthDate;
          const formattedDate =
            dateString?.substring(0, 4) +
            '-' +
            dateString?.substring(4, 6) +
            '-' +
            dateString?.substring(6, 8);
          const year = dateString?.substring(0, 4);
          const isValid = Date.parse(formattedDate);
          console.log(dateString, formattedDate, isValid);

          return {
            termsOfService: values.termsOfService ? null : true,
            birthDate:
              !isNaN(isValid) &&
              dateString.length === 8 &&
              +year > 1938 &&
              +year < 2050
                ? null
                : true,
          };
      }
    },
  });

  useEffect(() => {
    if (step !== 4) {
      removeUserData();
      router.push({
        query: { step: 1 },
      });
    }
    if (step === 4 && userData) {
      if (error) {
        removeError();
        form.setValues({
          ...userData,
          calendar: false,
          intercalation: false,
          termsOfService: false,
        });
      } else {
        router.replace('/');
        removeUserData();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (form.values.gender !== undefined) setUserData(form.values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.values]);

  useEffect(() => {
    if (_.isEmpty(router.query) && queryStep) router.replace('/');
    if (step !== undefined && (step > 4 || step < 1)) router.replace('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query, queryStep, step]);

  if (!step) return <></>;

  const title: StepTitleType[] = [
    {
      questionText: '당신의 이름은 무엇인가요?',
      description: '별명을 입력해주셔도 괜찮습니다.',
    },
    {
      questionText: '당신의 성별을 선택해주세요.',
    },
    {
      questionText: '당신의 출생지를 선택해주세요.',
    },
    {
      questionText: '생년월일시를 선택해주세요.',
    },
  ];

  const stepInputTemplateProps: StepInputTemplateProps = {
    topBarComponent: (
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
    ),
    stepTitleComponent: <StepTitle step={step} {...title[step - 1]} />,
    formComponent: <Form form={form} step={step} />,
    nextButtonComponent: (
      <NextButton
        onClick={(e) => {
          if (form.validate().hasErrors) e.preventDefault();
        }}
        disabled={!form.isValid()}
        href={isLastStep ? '/result' : { query: { step: step + 1 } }}
        btnText={isLastStep ? '결과보기' : '다음'}
      />
    ),
  };

  return (
    <LayoutTemplate>
      <StepInputTemplate {...stepInputTemplateProps} />
    </LayoutTemplate>
  );
}

export default Step;
