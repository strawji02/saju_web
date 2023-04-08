import { Stack } from '@mantine/core';
import Title from '../atoms/Title';
import { SAJU_60, SAJU_HAN_60 } from '../../utils/utils';
import UnderLinedText from '../atoms/UnderLinedText';

export interface IljuModalContentsProps {
  ilju?: number;
}

function IljuModalContents({ ilju, ...props }: IljuModalContentsProps) {
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
      {`{여기엔 API에서 받아온 일주 설명이 들어갈거에요}`}
    </Stack>
  );
}

export default IljuModalContents;
