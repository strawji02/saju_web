/* eslint-disable react-hooks/exhaustive-deps */
import { ActionIcon, Box, Group, Modal, Stack } from '@mantine/core';
import { IconX } from '@tabler/icons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { getResult } from '../components/api/result';
import Loading from '../components/atoms/Loading';
import ErrorTemplate from '../components/template/ErrorTemplate';
import ResTemplate from '../components/template/ResTemplate';
import { ResultParams } from '../components/types/StepInput';
import { useUserResultState } from '../utils/state';

function Result() {
  const router = useRouter();
  const { userData, setError, error } = useUserResultState();

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
          <ResTemplate result={resultMutate.data} userData={userData} />
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
