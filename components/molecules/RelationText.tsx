import { Center, Paper, Stack, Text, Title } from '@mantine/core';
import UnderLinedText from '../atoms/UnderLinedText';

export interface RelationTextProps {
  scoreIndex: number;
  subject: { ilju: string; name: string };
  object: { ilju: string; name: string };
}

function RelationText({
  scoreIndex,
  subject,
  object,
  ...props
}: RelationTextProps) {
  return (
    <Paper shadow="xl" radius="lg" p="lg">
      <Text c="dark" ta="center" lh={2} fz={17}>
        주체가 <UnderLinedText>{subject.ilju} 일주</UnderLinedText>인{' '}
        <UnderLinedText>{subject.name}</UnderLinedText>님이면
        <br /> <UnderLinedText> {object.ilju} 일주</UnderLinedText>인{' '}
        <UnderLinedText> {object.name}</UnderLinedText>님과의
        <br /> 관계적합도는 5단계 중{' '}
        <UnderLinedText>{scoreIndex + 1}단계</UnderLinedText> 입니다.
      </Text>
    </Paper>
  );
}

export default RelationText;
