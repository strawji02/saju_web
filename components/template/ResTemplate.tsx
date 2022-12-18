import { Divider, Mark, Stack, Text } from '@mantine/core';
import Title from '../atoms/Title';
import UnderLinedText from '../atoms/UnderLinedText';
import { ResultType, StepInputFormType } from '../types/StepInput';

interface Props {
  result: ResultType | undefined;
  userData: StepInputFormType | undefined;
}
function ResTemplate({ result, userData }: Props) {
  return (
    <Stack>
      <Title
        text={`${new Date(userData?.birthDate || '0').getFullYear()}년 ${
          new Date(userData?.birthDate || '0').getMonth() + 1 || 0
        }월 ${new Date(userData?.birthDate || '0').getDate()}일 (${
          userData?.calendar ? '음력' : '양력'
        }) ${new Date(userData?.birthTime || '0').getHours()}시 
        ${new Date(userData?.birthTime || '0').getMinutes()}분 
        ${userData?.name}님`}
        style={{ color: 'black', textAlign: 'center' }}
      />
      <Text align="center" c="dark">
        {result?.day}
      </Text>
      <Text align="center" c="dark">
        {result?.day_kr}
      </Text>
      <Text align="center" c="gray">
        {result?.image}
      </Text>
      <Divider />
      <Text weight={800} size={17} align="center" c="dark">
        오늘 태어난{' '}
        <UnderLinedText>
          {result?.day}({result?.day_kr})
        </UnderLinedText>{' '}
        일주 출생자
      </Text>
      <Text
        style={{
          fontFamily: 'LotteMartDream',
        }}
        size={18}
        align="center"
        c="dark"
      >
        {result?.advice}
      </Text>
      <Divider />
      <Text c="dark">{result?.res_str}</Text>
    </Stack>
  );
}

export default ResTemplate;
