import { Box, Center, Divider } from '@mantine/core';
import DefaultText from '../../../components/DefaultText';
import MarkDescriptionText from '../../../components/MarkDescriptionText';
import Title from '../../../components/Title';
import UnderLinedText from '../../../components/UnderLinedText';
import { ResultType, StepInputFormType } from '../../../utils/types';
import SajuImage from './shared/SajuImage';

export interface ResultIljuDescriptionProps {
  result: ResultType | undefined;
  userData: StepInputFormType | undefined;
}

function ResultIljuDescription({
  result,
  userData,
  ...components
}: ResultIljuDescriptionProps) {
  const dateString = userData?.birthDate;
  const formattedDate =
    dateString?.substring(0, 4) +
    '-' +
    dateString?.substring(4, 6) +
    '-' +
    dateString?.substring(6, 8);

  const year = new Date(formattedDate).getFullYear();
  const month = new Date(formattedDate).getMonth() + 1 || 0;
  const day = new Date(formattedDate).getDate();
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
