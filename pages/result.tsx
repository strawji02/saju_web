/* eslint-disable react-hooks/exhaustive-deps */
import { ActionIcon, Box, Group, Modal, Stack } from '@mantine/core';
import { IconX } from '@tabler/icons';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { getResult } from '../components/api/result';
import Loading from '../components/atoms/Loading';
import DescriptionText from '../components/molecules/DescriptionText';
import ResultButtons from '../components/organism/ResultButtons';
import ResultIljuDescription from '../components/organism/ResultIljuDescription';
import ErrorTemplate from '../components/template/ErrorTemplate';
import ResTemplate from '../components/template/ResTemplate';
import { ResultParams } from '../components/types/StepInput';
import { useUserResultState } from '../utils/state';

function Result() {
  const router = useRouter();
  const { userData, setError, error } = useUserResultState();
  const ref = useRef<HTMLDivElement>(null);

  const [params, setParams] = useState<ResultParams>();

  const resultMutate = useMutation('get-result', getResult, {
    onError: () => setError(),
  });

  useEffect(() => {
    if (userData) {
      setParams({
        gender: userData.gender || '',
        birthplace: userData.birthPlace,
        calendar: userData.calendar ? '음력' : '양력',
        year: new Date(userData.birthDate || '0').getFullYear(),
        month: new Date(userData.birthDate || '0').getMonth() + 1,
        day: new Date(userData.birthDate || '0').getDate(),
        hour: new Date(`2000-01-01T${userData.birthTime}` || '0').getHours(),
        min: new Date(`2000-01-01T${userData.birthTime}` || '0').getMinutes(),
        intercalation: userData.intercalation ? '윤달' : null,
      });
    } else {
      router.push('/');
    }
  }, [userData]);

  useEffect(() => {
    if (params) resultMutate.mutate(params);
  }, [params]);

  return (
    <Stack p="lg">
      <Group position="right">
        <ActionIcon onClick={() => router.push('/')}>
          <IconX size={18} />
        </ActionIcon>
      </Group>
      <Box>
        {resultMutate.data ? (
          <ResTemplate
            descriptionTextComponent={
              <DescriptionText
                texts={[
                  '인간의 운명을 지배하는 4개의 기둥',
                  '(四柱=년주+월주+”일주”+시주)인 사주에서',
                  '당신의 [성향/성격/심리]를 가장 잘 보여주는 것이',
                  '“일주(日柱)”랍니다.',
                ]}
              />
            }
            iljuDescriptionTextComponent={
              <ResultIljuDescription
                result={resultMutate.data}
                userData={userData}
              />
            }
            resultbuttonsComponent={
              <ResultButtons
                userData={userData}
                imgRef={ref}
                result={resultMutate.data}
              />
            }
            imgRef={ref}
          />
        ) : resultMutate.isError ? (
          <ErrorTemplate />
        ) : (
          <Loading />
        )}
      </Box>
    </Stack>
  );
}

export default Result;
