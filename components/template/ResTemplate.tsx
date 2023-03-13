import { Box, Center, Divider, List, Mark, Stack, Text } from '@mantine/core';
import { padStart } from 'lodash';
import Image from 'next/image';
// import { lotteMart } from '../../utils/fonts';
import DefaultText from '../atoms/DefaultText';
import Title from '../atoms/Title';
import UnderLinedText from '../atoms/UnderLinedText';
import { ResultType, StepInputFormType } from '../types/StepInput';
import stringReplace from 'react-string-replace';
import UnderLinedDescription from '../molecules/UnderLinedDescription';

interface Props {
  result: ResultType | undefined;
  userData: StepInputFormType | undefined;
}
function ResTemplate({ result, userData }: Props) {
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

  return (
    <Stack px="xs">
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
        {src && <Image alt="사주 이미지" src={src} width={320} height={320} />}
      </Center>
      <Divider />
      <DefaultText fw={800} fz={17}>
        <UnderLinedText>
          {result?.day}({result?.day_kr})
        </UnderLinedText>{' '}
        일주 출생자
      </DefaultText>
      <DefaultText disallowDrag size={18}>
        {result?.advice}
      </DefaultText>
      <Divider />
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
    </Stack>
  );
}

export default ResTemplate;
