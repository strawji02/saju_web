import { useForm } from '@mantine/form';
import axios from 'axios';
import _ from 'lodash';
import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import StepInputTemplate from '../components/template/StepInputTemplate';
import {
  StepInputFormType,
  StepTitleType,
} from '../components/types/StepInput';

function Step({ dosi }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(dosi);

  const router = useRouter();
  const queryStep = router.query['step'];
  const step = typeof queryStep === 'string' ? parseInt(queryStep) : undefined;

  const form = useForm<StepInputFormType>({
    initialValues: {
      name: '',
      gender: undefined,
      birthPlace: '',
      birthDate: new Date(),
      birthTime: new Date(),
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
        default:
          return {};
      }
    },
  });

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

  return (
    <div>
      <StepInputTemplate step={step} title={title[step - 1]} form={form} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get('https://server.saju60.com/dosi.php');
  const resData = await res.data.split('\n');
  const dosi: { value: string; label: string }[] = resData
    .map((d: string) => {
      if (d !== '') {
        return JSON.parse(d);
      }
      return null;
    })
    .filter((d: string) => d);

  return { props: { dosi } };
}

export default Step;
