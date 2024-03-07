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
    <Stack px={22} pt={29} justify="space-between" w="100%">
      <NextButton
        isLoading={isLoading}
        onClick={() => setIsLoading(true)}
        disabled={false}
        href={href}
        btnText="출발하기"
      />
    </Stack>
  );
}

export default HomeStepBox;
