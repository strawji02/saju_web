import { Box, Center, Divider, List } from '@mantine/core';
import Image from 'next/image';
import DefaultText from '../atoms/DefaultText';
import SajuImage from '../atoms/SajuImage';
import Title from '../atoms/Title';
import UnderLinedText from '../atoms/UnderLinedText';
import MarkDescriptionText from '../molecules/MarkDescriptionText';
import UnderLinedDescription from '../molecules/UnderLinedDescription';
import { ResultType, StepInputFormType } from '../types/StepInput';

export interface ResultIljuDescriptionProps {
  result: ResultType | undefined;
  userData: StepInputFormType | undefined;
}

function ResultIljuDescription({
  result,
  userData,
  ...components
}: ResultIljuDescriptionProps) {
  const year = new Date(userData?.birthDate || '0').getFullYear();
  const month = new Date(userData?.birthDate || '0').getMonth() + 1 || 0;
  const day = new Date(userData?.birthDate || '0').getDate();
  const cal = userData?.calendar ? '음력' : '양력';
  const hour = new Date(`2000-01-01T${userData?.birthTime}` || '0').getHours();
  const min = new Date(`2000-01-01T${userData?.birthTime}` || '0').getMinutes();
  const name = userData?.name;

  const splitText = '\n \n\n ';
  return (
    <>
      <Title
        text={`${year}년 ${month}월 ${day}일 (${cal}) ${hour}시 
        ${min}분에 태어난`}
        c="dark"
        align="center"
      />
      <Box ml="xs" mt="sm">
        <DefaultText component="span" fw={800} fz={17}>
          <UnderLinedText>
            {result?.day}({result?.day_kr})
          </UnderLinedText>{' '}
          일주
        </DefaultText>
        <Title fz={22} c="dark">
          <Title fz={22} component="span">
            {name}
          </Title>
          님의{' '}
          <Title fz={22} component="span">
            느낌은
          </Title>
        </Title>
      </Box>
      <DefaultText fw="lighter" fz={30} c="gray.9" align="center">
        {result?.image}
      </DefaultText>
      <Center>
        <SajuImage sajuNo={result?.s_no || ''} />
      </Center>
      <Divider />
      <Box ml="xs">
        <DefaultText fw={800} fz={17}>
          <UnderLinedText>
            {result?.day}({result?.day_kr})
          </UnderLinedText>{' '}
          일주
        </DefaultText>
        <Title fz={22} c="dark">
          <Title fz={22} component="span">
            {name}
          </Title>
          님{' '}
          <Title fz={22} component="span">
            당신의 성향과 심리
          </Title>
          <br />
          그리고{' '}
          <Title fz={22} component="span">
            운세
          </Title>
        </Title>
      </Box>
      {result && <MarkDescriptionText resultStr={result.res_str} />}
      <Divider />
      <Box ml="xs">
        <DefaultText fw={800} fz={17}>
          <UnderLinedText>
            {result?.day}({result?.day_kr})
          </UnderLinedText>{' '}
          일주
        </DefaultText>{' '}
        <Title fz={22}>
          {name}
          <Title component="span" fz={22} c="dark">
            님
          </Title>{' '}
          당신의 성장을 위한 팁
        </Title>
      </Box>
      <DefaultText ff="haenam" ta="center" disallowDrag size={18}>
        {result?.advice}
      </DefaultText>
      <Box h={40} />
    </>
  );
}

export default ResultIljuDescription;
