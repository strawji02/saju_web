/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  ActionIcon,
  Box,
  Group,
  Modal,
  Paper,
  Stack,
  Text,
} from '@mantine/core';
import { toPng } from 'html-to-image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { getResult } from '../components/api/result';
import Loading from '../components/atoms/Loading';
import Title from '../components/atoms/Title';
import DescriptionText from '../components/molecules/DescriptionText';
import RelationView from '../components/organism/RelationView';
import ResultButtons from '../components/organism/ResultButtons';
import ResultIljuDescription from '../components/organism/ResultIljuDescription';
import ErrorTemplate from '../components/template/ErrorTemplate';
import ResTemplate, {
  ResTemplateProps,
} from '../components/template/ResTemplate';
import { ResultParams } from '../components/types/StepInput';
import { useUserResultState } from '../utils/state';

export interface ShareParamData {
  ilju: number | undefined;
  username: string | undefined;
}

function Result() {
  const router = useRouter();
  const { userData, setError, error } = useUserResultState();
  // const { ilju, username } = useShareParamState();
  const imgRef = useRef<HTMLDivElement>(null);

  const [params, setParams] = useState<ResultParams>();
  const [shareParam, setShareParam] = useState<ShareParamData>();

  const resultMutate = useMutation('get-result', getResult, {
    onError: () => setError(),
  });

  const [downloadLoading, setDownloadLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState<string>();

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
        JSON.parse(sessionStorage.getItem('shared-ilju') as string)
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

  const resTemplateProps: Omit<ResTemplateProps, 'hasRelation'> = {
    descriptionTextComponent: (
      <DescriptionText
        texts={[
          '인간의 운명을 지배하는 4개의 기둥',
          '(四柱=년주+월주+”일주”+시주)인 사주에서',
          '당신의 [성향/성격/심리]를 가장 잘 보여주는 것이',
          '“일주(日柱)”랍니다.',
        ]}
      />
    ),
    iljuDescriptionTextComponent: (
      <ResultIljuDescription result={resultMutate.data} userData={userData} />
    ),
    resultbuttonsComponent: (
      <ResultButtons
        userData={userData}
        result={resultMutate.data}
        loading={downloadLoading}
        onButtonClick={onButtonClick}
      />
    ),
    relationModalComponent: (
      <RelationView
        result={resultMutate.data}
        targetIlju={shareParam?.ilju}
        targetName={shareParam?.username}
        userData={userData}
      />
    ),
    imgRef: imgRef,
    relation: shareParam?.username,
  };

  return (
    <>
      {resultMutate.data ? (
        <ResTemplate {...resTemplateProps} />
      ) : resultMutate.isError ? (
        <ErrorTemplate />
      ) : (
        <Loading />
      )}
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
