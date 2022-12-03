import { Box, Divider, Flex, Image, Stack, Text } from '@mantine/core';
import React from 'react';
import Title from '../atoms/Title';

interface Props {
  svg?: any;
}

function HomeDescriptText({ svg }: Props) {
  return (
    <Stack ml={28} spacing={26} align="flex-start">
      <Divider
        w={24}
        style={{ borderTopWidth: 2, borderTopColor: '#2d2da8' }}
      />
      <Box>
        <Title text="너와 나의 하루는" style={{ fontSize: 18 }} />
        <Title text="당신의 삶이 궁금합니다." style={{ fontSize: 18 }} />
      </Box>
      <Flex w={'100%'}>
        <Text mb={50} w={255} style={{ fontSize: 15 }}>
          헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지
          아니하고는 파면되지 아니한다. 모든 국민은 근로의 권리를 가진다. 국가는
          사회적·경제적 방법으로 근로자의 고용의진과 적정임금의 보장에
          노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야
          한다.
        </Text>
        <Flex align="flex-end" style={{ flexGrow: 1 }}>
          {svg ? (
            <Image {...svg} alt="graphic svg" />
          ) : (
            <Box w={130} h={137} style={{ border: 'solid' }} />
          )}
        </Flex>
      </Flex>
    </Stack>
  );
}

export default HomeDescriptText;
