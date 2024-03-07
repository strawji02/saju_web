import { Box, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ArrowLeftButton from '../../components/ArrowLeftButton';
import Layout from '../../components/Layout';
import NextButton from '../../components/NextButton';
import Topbar from '../../components/Topbar';
import { useUserResultState } from '../../utils/state';
import { toStringByFormatting } from '../../utils/utils';
import Form from './components/Form';
import StepTitle from './components/StepTitle';
import { StepInputFormType, StepTitleType } from './types';

const title: StepTitleType[] = [
  {
    questionText: '당신의 이름은 무엇인가요?',
    description: '별명을 입력해주셔도 괜찮습니다.',
    step: 1,
  },
  {
    questionText: '당신의 성별을 선택해주세요.',
    step: 2,
  },
  {
    questionText: '당신의 출생지를 선택해주세요.',
    step: 3,
  },
  {
    questionText: '생년월일시를 선택해주세요.',
    step: 4,
  },
];

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
      // removeUserData();
      // router.push({
      //   query: { step: 1 },
      // });
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
        // router.replace('/');
        removeUserData();
      }
    }
  }, []);

  useEffect(() => {
    if (form.values.gender !== undefined) setUserData(form.values);
  }, [form.values]);

  useEffect(() => {
    if (_.isEmpty(router.query) && queryStep) router.replace('/');
    if (step !== undefined && (step > 4 || step < 1)) router.replace('/');
  }, [router.query, queryStep, step]);

  function goToStep(toPrev?: boolean) {
    if (!step) return void 0;
    if (!toPrev && isLastStep) router.push('/result');
    else if (toPrev && step === 1) router.push('/');
    else router.push({ query: { step: step + (toPrev ? -1 : 1) } });
  }

  function handleClickNextButton(e: React.MouseEvent<HTMLAnchorElement>) {
    if (form.validate().hasErrors) e.preventDefault();
  }

  if (!step) return <></>;

  return (
    <Layout>
      <Topbar
        title="당신을 알려주세요"
        leftArea={<ArrowLeftButton onClick={() => goToStep(true)} />}
      />
      <Box mt={50} mx={27}>
        <Stack spacing={0}>
          <StepTitle {...title[step - 1]} />
          <Box mt={30} mb={64}>
            <Form form={form} step={step} goToNextStep={goToStep} />
          </Box>
          <NextButton
            onClick={handleClickNextButton}
            disabled={!form.isValid()}
            href={isLastStep ? '/result' : { query: { step: step + 1 } }}
            btnText={isLastStep ? '결과보기' : '다음'}
          />
        </Stack>
      </Box>
    </Layout>
  );
}

export default Step;
