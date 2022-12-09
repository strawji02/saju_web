import { Stack, Text } from '@mantine/core';
import Title from '../atoms/Title';
import { ResultType, StepInputFormType } from '../types/StepInput';

interface Props {
  result: ResultType | undefined;
  userData: StepInputFormType | undefined;
}
function ResTemplate({ result, userData }: Props) {
  console.log(userData);

  return (
    <Stack>
      <Title
        text={`${new Date(userData?.birthDate || '0').getFullYear()}년 ${
          new Date(userData?.birthDate || '0').getMonth() || 0 + 1
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
      <Text align="center" c="dark">
        {result?.res_str}
      </Text>
    </Stack>
  );
}

export default ResTemplate;
