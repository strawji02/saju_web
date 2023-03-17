import { Box, Button, Flex, Stack } from '@mantine/core';
import Link from 'next/link';
import React, { useState } from 'react';
import NextButton from '../atoms/NextButton';
import Title from '../atoms/Title';
import CopyrightText from '../molecules/CopyrightText';

interface Props {
  href: string;
}

function HomeStepBox({ href }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Stack
      px={22}
      pt={29}
      justify="space-between"
      w="100%"
      // style={{ height: '55vh' }}
    >
      {/* <Stack mt="lg" spacing="lg" justify="space-around"> */}
      {/* <StepBox
            title="STEP 01"
            body="별명 또는 이름과 성별을 선택해주세요."
          />
          <StepBox
            title="STEP 02"
            body="생년월일시와 윤달여부를 선택해주세요."
          />
          <StepBox title="STEP 03" body="결과를 확인해주세요." /> */}
      <NextButton
        isLoading={isLoading}
        onClick={() => setIsLoading(true)}
        disabled={false}
        href={href}
        btnText="출발하기"
      />
      {/* </Stack> */}
    </Stack>
  );
}

export default HomeStepBox;
