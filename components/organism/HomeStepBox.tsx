import { Box, Button, Flex, Stack } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import Title from '../atoms/Title';
import CopyrightText from '../molecules/CopyrightText';
import StepBox from '../molecules/StepBox';

interface Props {
  href: string;
}

function HomeStepBox({ href }: Props) {
  return (
    <Stack
      px={22}
      pt={29}
      justify="space-between"
      w="100%"
      // style={{ height: '55vh' }}
    >
      <Box>
        <Title
          text="너와나의 하루의 여정을 소개합니다."
          style={{ fontSize: 17 }}
        />
        <Stack mt="lg" spacing="lg" justify="space-around">
          <StepBox
            title="STEP 01"
            body="별명 또는 이름과 성별을 선택해주세요."
          />
          <StepBox
            title="STEP 02"
            body="생년월일시와 윤달여부를 선택해주세요."
          />
          <StepBox title="STEP 03" body="결과를 확인해주세요." />
          <Button
            component={Link}
            href={href}
            sx={{ boxShadow: '3px 3px 9.62px 0 rgba(91, 91, 91, 0.61)' }}
            mt="xs"
            radius="xl"
            size="xl"
          >
            출발하기
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}

export default HomeStepBox;
