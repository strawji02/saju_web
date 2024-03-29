import { Group, Stack } from '@mantine/core';
import Image from 'next/image';
import Arrow from '../../../../components/assets/arrow.svg';
import Title from '../../../../components/Title';

export interface RelationScoreProps {
  scoreIndex: number[];
}

const RELATION_SCORE_TEXT = [
  '아주 긍정적',
  '긍정적',
  '보통 수준',
  '부정적',
  '아주 부정적',
];

function RelationScore({ scoreIndex: [obj, sub] }: RelationScoreProps) {
  return (
    <Group spacing={40} w={'100%'} position="center">
      <Stack align="center">
        <Title pos="relative" c="dark" fz={28}>
          <Image
            style={{ position: 'absolute', left: -60, top: -5 }}
            src={`/icons/compatibility${obj + 1}.png`}
            alt="obj comp"
            width={77}
            height={77}
          />
          {RELATION_SCORE_TEXT[obj]}
        </Title>
        <Arrow />
      </Stack>
      <Stack align="center">
        <Arrow style={{ transform: 'rotate(180deg)' }} />
        <Title pos="relative" c="dark" fz={28}>
          <Image
            style={{ position: 'absolute', left: -60, top: -5 }}
            src={`/icons/compatibility${sub + 1}.png`}
            alt="obj comp"
            width={77}
            height={77}
          />
          {RELATION_SCORE_TEXT[sub]}
        </Title>
      </Stack>
    </Group>
  );
}

export default RelationScore;
