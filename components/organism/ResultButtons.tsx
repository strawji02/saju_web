import { Button, Stack } from '@mantine/core';
import { IconShare } from '@tabler/icons';
import download from 'downloadjs';
import { toPng } from 'html-to-image';
import { useRouter } from 'next/router';
import { RefObject, useCallback, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ResultType, StepInputFormType } from '../types/StepInput';

export interface ResultButtonsProps {
  imgRef: RefObject<HTMLDivElement>;
  result: ResultType | undefined;
  userData: StepInputFormType | undefined;
}

function ResultButtons({
  imgRef,
  result,
  userData,
  ...props
}: ResultButtonsProps) {
  const router = useRouter();

  const [downloadLoading, setDownloadLoading] = useState(false);

  const onButtonClick = useCallback(() => {
    if (imgRef.current === null) {
      return;
    }
    setDownloadLoading(true);
    toPng(imgRef.current, { cacheBust: true })
      .then((dataUrl) => {
        console.log(dataUrl);

        // const link = document.createElement('a');
        // link.download = 'saju-result.png';
        // link.href = dataUrl;
        // link.click();
        download(dataUrl, 'my-node.png');

        setDownloadLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [imgRef]);
  const text = `${userData?.name}님과의 궁합을 사주 해석과 함께 확인해보세요!`;
  const url = `${document.location.origin}/?ilju=${result?.s_no}&username=${userData?.name}`;

  return (
    <Stack mt="xl">
      <CopyToClipboard
        text={`${text}\n${url}`}
        onCopy={() => {
          if (window.navigator?.share) {
            window.navigator
              .share({
                text,
                title: 'title',
                url,
              })
              .then(() => {
                console.log('shared');
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            window.alert('url 복사가 완료되었습니다');
          }
        }}
      >
        <Button rightIcon={<IconShare />} color="gray.6" size="lg">
          친구와 궁합보기
        </Button>
      </CopyToClipboard>
      <Button
        onClick={() => {
          router.push({
            pathname: '/compatibility',
            query: { positive: result?.positive, negative: result?.negative },
          });
        }}
        color="gray.6"
        size="lg"
      >
        나와 맞는 / 안맞는 일주
      </Button>
      <Button
        loading={downloadLoading}
        onClick={onButtonClick}
        color="gray.6"
        size="lg"
      >
        이미지로 저장하기
      </Button>
    </Stack>
  );
}

export default ResultButtons;
