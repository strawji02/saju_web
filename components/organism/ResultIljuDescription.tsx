import { Box, Center, Divider, List } from '@mantine/core';
import Image from 'next/image';
import DefaultText from '../atoms/DefaultText';
import SajuImage from '../atoms/SajuImage';
import Title from '../atoms/Title';
import UnderLinedText from '../atoms/UnderLinedText';
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
        {/* {src && <Image alt="사주 이미지" src={src} width={320} height={320} />} */}
        <SajuImage sajuNo={result?.s_no || ''} />
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
    </>
  );
}

export default ResultIljuDescription;
