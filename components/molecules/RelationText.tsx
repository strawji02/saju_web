import { Paper, Text, Title } from '@mantine/core';

const RELATION_SCORE_TEXT = [
  '아주 긍정적',
  '긍정적',
  '보통 수준',
  '부정적',
  '아주 부정적',
];

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
    <Paper withBorder shadow="xl" p="lg">
      <Title w="100%" ta="center" fz={28} c="dark">
        {RELATION_SCORE_TEXT[scoreIndex]}
      </Title>
      <Text>
        주체가 {subject.ilju} 일주인 {subject.name}님과{' '}
      </Text>
      <Text>
        객체인 {object.ilju} 일주인 {object.name}님의
      </Text>
      <Text>관계적합도는 5단계 중 {scoreIndex + 1}단계 입니다.</Text>
    </Paper>
  );
}

export default RelationText;
