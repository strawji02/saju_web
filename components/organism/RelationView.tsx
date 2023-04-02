import { Group, Paper, Stack, Text } from '@mantine/core';
import { SAJU_60, SAJU_HAN_60 } from '../../utils/utils';
import SajuImage from '../atoms/SajuImage';
import Title from '../atoms/Title';
import RelationCard from '../molecules/RelationCard';
import RelationText from '../molecules/RelationText';
import { ResultType, StepInputFormType } from '../types/StepInput';

export interface RelationViewProps {
  targetName: string | undefined;
  targetIlju: number | undefined;
  result: ResultType | undefined;
  userData: StepInputFormType | undefined;
}

function RelationView({
  targetIlju,
  targetName,
  result,
  userData,
  ...props
}: RelationViewProps) {
  const userIljuText = `${result?.day}(${result?.day_kr})`;
  const targetIljuText = `${SAJU_HAN_60[targetIlju || 0]}(${
    SAJU_60[targetIlju || 0]
  })`;

  // console.log(userIljuText, targetIljuText);

  return (
    <Stack>
      <RelationText
        scoreIndex={parseInt(result?.relation_score || '') - 1}
        subject={{
          ilju: userIljuText,
          name: userData?.name || '',
        }}
        object={{
          ilju: targetIljuText,
          name: targetName || '',
        }}
      />
      <Group position="apart">
        <RelationCard
          sajuNo={result?.s_no || ''}
          userIlju={userIljuText}
          userName={userData?.name || ''}
        />
        <RelationCard
          sajuNo={`${targetIlju}`}
          userIlju={targetIljuText}
          userName={targetName || ''}
        />
      </Group>
      <RelationText
        scoreIndex={parseInt(result?.relation_score || '') - 1}
        object={{
          ilju: userIljuText,
          name: userData?.name || '',
        }}
        subject={{
          ilju: targetIljuText,
          name: targetName || '',
        }}
      />
    </Stack>
  );
}

export default RelationView;
