import { Stack } from '@mantine/core';
import Title from '../../../../components/Title';
import { SAJU_60, SAJU_HAN_60 } from '../../../../utils/utils';
import { ResultType, StepInputFormType } from '../../../input/types';
import RelationCard from './RelationCard';
import RelationScore from './RelationScore';
import RelationText from './RelationText';

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
    <Stack px="md" spacing="xl">
      <Title fz={18} ta="center">
        주체인 당신과 객체인 상대방 일주에 대한 관계적합도입니다.
      </Title>
      <RelationText
        scoreIndex={+(result?.relation_score || '') - 1}
        subject={{
          ilju: userIljuText,
          name: userData?.name || '',
        }}
        object={{
          ilju: targetIljuText,
          name: targetName || '',
        }}
      />
      <RelationCard
        sajuNo={result?.s_no || ''}
        userIlju={userIljuText}
        userName={userData?.name || ''}
      />
      <RelationScore
        scoreIndex={[
          +(result?.relation_score || '') - 1,
          +(result?.relation_reverse_score || '') - 1,
        ]}
      />
      <RelationCard
        sajuNo={`${targetIlju}`}
        userIlju={targetIljuText}
        userName={targetName || ''}
      />
      <RelationText
        scoreIndex={+(result?.relation_reverse_score || '') - 1}
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
