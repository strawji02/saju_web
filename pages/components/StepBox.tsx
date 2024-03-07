import { Stack } from '@mantine/core';
import { useState } from 'react';
import NextButton from '../../components/NextButton';

interface Props {
  href: string;
}

function StepBox({ href }: Props) {
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

export default StepBox;
