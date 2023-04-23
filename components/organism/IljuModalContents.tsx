import { Skeleton, Stack } from '@mantine/core';
import Title from '../atoms/Title';
import { SAJU_60, SAJU_HAN_60 } from '../../utils/utils';
import UnderLinedText from '../atoms/UnderLinedText';
import { useQuery } from 'react-query';
import { getDesctiprion } from '../api/description';
import MarkDescriptionText from '../molecules/MarkDescriptionText';

export interface IljuModalContentsProps {
  ilju?: number;
}

function IljuModalContents({ ilju, ...props }: IljuModalContentsProps) {
  const { data } = useQuery(
    `get-description-${ilju}`,
    async () => getDesctiprion(SAJU_60[ilju as number]),
    {
      enabled: !!ilju,
    }
  );

  console.log(data);

  return (
    <Stack spacing={2}>
      <Title fz={20} c="dark">
        나와 아주 부정적인
      </Title>
      <Title fz={20}>
        <UnderLinedText fz={20}>
          {ilju ? `${SAJU_HAN_60[ilju]} ${SAJU_60[ilju]}` : ' - '}
        </UnderLinedText>{' '}
        일주
      </Title>
      <Title fz={20} c="dark">
        사람의 성향과 심리 그리고 운세
      </Title>
      {data ? (
        <MarkDescriptionText resultStr={data} />
      ) : (
        <Stack>
          <Skeleton w={'100%'} h={100} />
          <Skeleton w={'100%'} h={100} />
          <Skeleton w={'100%'} h={100} />
          <Skeleton w={'100%'} h={100} />
          <Skeleton w={'100%'} h={100} />
        </Stack>
      )}
    </Stack>
  );
}

export default IljuModalContents;
