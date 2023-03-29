import {
  Box,
  Button,
  Center,
  Divider,
  List,
  Mark,
  Paper,
  Stack,
  Text,
} from '@mantine/core';
import { padStart } from 'lodash';
import Image from 'next/image';
// import { lotteMart } from '../../utils/fonts';
import DefaultText from '../atoms/DefaultText';
import Title from '../atoms/Title';
import UnderLinedText from '../atoms/UnderLinedText';
import { ResultType, StepInputFormType } from '../types/StepInput';
import stringReplace from 'react-string-replace';
import UnderLinedDescription from '../molecules/UnderLinedDescription';
import { SAJU_60 } from '../../utils/utils';
import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

interface Props {
  result: ResultType | undefined;
  userData: StepInputFormType | undefined;
}
function ResTemplate({ result, userData }: Props) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const year = new Date(userData?.birthDate || '0').getFullYear();
  const month = new Date(userData?.birthDate || '0').getMonth() + 1 || 0;
  const day = new Date(userData?.birthDate || '0').getDate();
  const cal = userData?.calendar ? '음력' : '양력';
  const hour = new Date(`2000-01-01T${userData?.birthTime}` || '0').getHours();
  const min = new Date(`2000-01-01T${userData?.birthTime}` || '0').getMinutes();
  const name = userData?.name;

  const src = result?.s_no
    ? `/images/${String(parseInt(result.s_no) + 1).padStart(2, '0')}@3x.png`
    : undefined;

  const splitText = '\n \n\n ';

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  // console.log(SAJU_60[0]);

  return (
    <>
      <Stack px="xs" my="lg" ref={ref} bg="#fff">
        <Paper
          sx={{ borderColor: '#2d2da8' }}
          shadow="xl"
          withBorder
          ta="center"
          p="lg"
          radius="md"
          mb="xl"
        >
          <Text fz={16} fw={400}>
            인간의 운명을 지배하는 4개의 기둥
          </Text>
          <Text fz={16} fw={400}>
            (四柱=년주+월주+”일주”+시주)인 사주에서
          </Text>
          <Text fz={16} fw={400}>
            당신의 [성향/성격/심리]를 가장 잘 보여주는 것이
          </Text>
          <Text fz={16} fw={400}>
            “일주(日柱)”랍니다.
          </Text>
        </Paper>
        <Box>
          <Title
            text={`${year}년 ${month}월 ${day}일 (${cal}) ${hour}시 
        ${min}분에 태어난`}
            c="dark"
            align="center"
          />
          <Title c="dark" align="center">
            <DefaultText component="span" fw={800} fz={17}>
              <UnderLinedText>
                {result?.day}({result?.day_kr})
              </UnderLinedText>{' '}
              일주
            </DefaultText>{' '}
            {name}님의 느낌은
          </Title>
        </Box>
        <DefaultText fw="lighter" fz={16} c="gray.9" align="center">
          {result?.image}
        </DefaultText>
        <Center>
          {src && (
            <Image alt="사주 이미지" src={src} width={320} height={320} />
          )}
        </Center>
        <Divider />
        <Box>
          <DefaultText ta="center" fw={800} fz={17}>
            <UnderLinedText>
              {result?.day}({result?.day_kr})
            </UnderLinedText>{' '}
            일주 {name}님
          </DefaultText>
          <DefaultText ta="center" fw={800} fz={17}>
            당신의 성향과 심리 그리고 운세
          </DefaultText>
        </Box>
        {result && (
          <DefaultText disallowDrag weight={500} size={17} align="left">
            <List>
              {result.res_str.split(splitText).map((text, index) => (
                <UnderLinedDescription key={`res-description-${index}`}>
                  {text}
                </UnderLinedDescription>
              ))}
            </List>
          </DefaultText>
        )}
        <Divider />
        <Box>
          <DefaultText ta="center" fw={800} fz={17}>
            <UnderLinedText>
              {result?.day}({result?.day_kr})
            </UnderLinedText>{' '}
            일주 {name}님
          </DefaultText>
          <DefaultText ta="center" fw={800} fz={17}>
            당신의 성장을 위한 팁
          </DefaultText>
        </Box>
        <DefaultText ff="haenam" ta="center" disallowDrag size={18}>
          {result?.advice}
        </DefaultText>
      </Stack>
      {/* <Box w="100%" bg="#f7f7f7">
        hi
      </Box> */}
      <Stack mt="lg">
        <Button color="gray.5" size="md">
          친구와 궁합보기
        </Button>
        <Button
          onClick={() => {
            router.push({
              pathname: '/compatibility',
              query: { positive: result?.positive, negative: result?.negative },
            });
          }}
          color="gray.5"
          size="md"
        >
          나와 맞는 / 안맞는 일주
        </Button>
        <Button onClick={onButtonClick} color="gray.5" size="md">
          이미지로 저장하기
        </Button>
      </Stack>
    </>
  );
}

export default ResTemplate;
