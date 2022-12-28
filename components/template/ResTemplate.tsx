import { Center, Divider, Mark, Stack, Text } from '@mantine/core';
import { padStart } from 'lodash';
import Image from 'next/image';
import { lotteMart } from '../../utils/fonts';
import DefaultText from '../atoms/DefaultText';
import Title from '../atoms/Title';
import UnderLinedText from '../atoms/UnderLinedText';
import { ResultType, StepInputFormType } from '../types/StepInput';

interface Props {
  result: ResultType | undefined;
  userData: StepInputFormType | undefined;
}
function ResTemplate({ result, userData }: Props) {
  const year = new Date(userData?.birthDate || '0').getFullYear();
  const month = new Date(userData?.birthDate || '0').getMonth() + 1 || 0;
  const day = new Date(userData?.birthDate || '0').getDate();
  const cal = userData?.calendar ? '음력' : '양력';
  const hour = new Date(userData?.birthTime || '0').getHours();
  const min = new Date(userData?.birthTime || '0').getMinutes();
  const name = userData?.name;

  const src = result?.s_no
    ? `/images/${String(parseInt(result.s_no) + 1).padStart(2, '0')}@3x.png`
    : undefined;

  return (
    <Stack px="xs">
      <Title
        text={`${year}년 ${month}월 ${day}일 (${cal}) ${hour}시 
        ${min}분 ${name}님`}
        style={{ color: 'black', textAlign: 'center' }}
      />
      <Center>
        {src && <Image alt="사주 이미지" src={src} width={320} height={320} />}
      </Center>
      <DefaultText color="gray">{result?.image}</DefaultText>
      <Divider />
      <DefaultText weight={800} size={17}>
        오늘 태어난{' '}
        <UnderLinedText>
          {result?.day}({result?.day_kr})
        </UnderLinedText>{' '}
        일주 출생자
      </DefaultText>
      <DefaultText disallowDrag className={lotteMart.className} size={18}>
        {result?.advice}
      </DefaultText>
      <Divider />
      <DefaultText disallowDrag weight={500} size={17} left>
        {result?.res_str}
      </DefaultText>
    </Stack>
  );
}

export default ResTemplate;
