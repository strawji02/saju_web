import {
  ActionIcon,
  Box,
  Button,
  Group,
  Modal,
  Paper,
  Stack,
} from '@mantine/core';
import { IconX } from '@tabler/icons';
import { toPng } from 'html-to-image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { getResult } from '../../api/result';
import Loading from '../../components/Loading';
import Title from '../../components/Title';
import { ResultParams } from '../../components/types';
import { useUserResultState } from '../../utils/state';
import DescriptionText from './components/DescriptionText';
import Error from './components/Error';
import RelationView from './components/RelationView';
import ResultButtons from './components/ResultButtons';
import ResultIljuDescription from './components/ResultIljuDescription';

export interface ShareParamData {
  ilju: number | undefined;
  username: string | undefined;
}

function Result() {
  const router = useRouter();
  const { userData, setError, error } = useUserResultState();
  const imgRef = useRef<HTMLDivElement>(null);

  const [params, setParams] = useState<ResultParams>();
  const [shareParam, setShareParam] = useState<ShareParamData>();
  const relation = shareParam?.username;

  const resultMutate = useMutation('get-result', getResult, {
    onError: () => setError(),
  });

  const [downloadLoading, setDownloadLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState<string>();

  const relationModalOpened = !!router.query.modal;
  const setRelationModalOpened = (state: boolean) =>
    router.push({ query: state ? { modal: true } : {} });

  useEffect(() => {
    if (relation && !sessionStorage.getItem('opened')) {
      setTimeout(() => {
        setRelationModalOpened(true);
      }, 500);
      sessionStorage.setItem('opened', 'true');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onButtonClick = useCallback(async () => {
    if (imgRef.current === null) {
      return;
    }
    setDownloadLoading(true);

    await toPng(imgRef.current, { cacheBust: true });
    await toPng(imgRef.current, { cacheBust: true });
    await toPng(imgRef.current, { cacheBust: true });

    const dataUrl = await toPng(imgRef.current, { cacheBust: true });
    console.log(dataUrl);
    setImgUrl(dataUrl);
    const link = document.createElement('a');
    link.download = 'saju-result.png';
    link.href = dataUrl;
    link.click();

    setDownloadLoading(false);
  }, [imgRef]);

  useEffect(() => {
    if (sessionStorage.getItem('shared-ilju')) {
      setShareParam(
        JSON.parse(sessionStorage.getItem('shared-ilju') as string),
      );
    }
    if (userData) {
      const dateString = userData.birthDate;
      const formattedDate =
        dateString?.substring(0, 4) +
        '-' +
        dateString?.substring(4, 6) +
        '-' +
        dateString?.substring(6, 8);

      setParams({
        gender: userData.gender || '',
        birthplace: userData.birthPlace,
        calendar: userData.calendar ? '음력' : '양력',
        year: new Date(formattedDate).getFullYear(),
        month: new Date(formattedDate).getMonth() + 1,
        day: new Date(formattedDate).getDate(),
        hour: new Date(`2000-01-01T${userData.birthTime}` || '0').getHours(),
        min: new Date(`2000-01-01T${userData.birthTime}` || '0').getMinutes(),
        intercalation: userData.intercalation ? '윤달' : null,
      });
    } else {
      router.push('/');
    }
  }, [userData]);

  useEffect(() => {
    if (params) resultMutate.mutate({ ...params, target: shareParam?.ilju });
  }, [params]);

  console.log(shareParam);

  if (resultMutate.isError) return <Error />;
  if (resultMutate.isLoading && !resultMutate.data) return <Loading />;

  return (
    <>
      <Stack p="lg">
        <Group position="right">
          {relation && (
            <Button onClick={() => setRelationModalOpened(true)}>
              {relation}님과의 궁합 다시보기
            </Button>
          )}
          <ActionIcon onClick={() => router.push('/')}>
            <IconX size={18} />
          </ActionIcon>
        </Group>
        <Box>
          <Stack px="xs" my="lg" ref={imgRef} bg="#fff">
            <DescriptionText
              texts={[
                '인간의 운명을 지배하는 4개의 기둥',
                '(四柱=년주+월주+”일주”+시주)인 사주에서',
                '당신의 [성향/성격/심리]를 가장 잘 보여주는 것이',
                '“일주(日柱)”랍니다.',
              ]}
            />
            <ResultIljuDescription
              result={resultMutate.data}
              userData={userData}
            />
          </Stack>
          <ResultButtons
            userData={userData}
            result={resultMutate.data}
            loading={downloadLoading}
            onButtonClick={onButtonClick}
          />
          <Modal
            onClose={() => setRelationModalOpened(false)}
            opened={relationModalOpened}
            exitTransitionDuration={500}
            transitionDuration={700}
            transition="slide-up"
            fullScreen
          >
            <Box m="auto" maw={500}>
              <RelationView
                result={resultMutate.data}
                targetIlju={shareParam?.ilju}
                targetName={shareParam?.username}
                userData={userData}
              />
            </Box>
          </Modal>
        </Box>
      </Stack>
      <Modal onClose={() => setImgUrl(undefined)} opened={!!imgUrl}>
        <Title mb="md">
          이미지를 저장해 {userData?.name} 님의 사주를 공유해보세요!
        </Title>
        {imgUrl && (
          <Paper shadow="xl" withBorder>
            <img width={'100%'} src={imgUrl} alt="saju_image" />
          </Paper>
        )}
      </Modal>
    </>
  );
}

export default Result;
