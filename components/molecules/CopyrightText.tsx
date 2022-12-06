import { Stack, Text } from '@mantine/core';
import React from 'react';

function CopyrightText() {
  return (
    <Stack mt="lg" mb="lg" spacing={0} align="center">
      <Text style={{ fontSize: 10, color: 'gray' }}>
        이메일 : webmaser@gmail.com
      </Text>
      <Text style={{ fontSize: 10, color: 'gray' }}>
        Copyright ⓒ All Rights Reserved.
      </Text>
    </Stack>
  );
}

export default CopyrightText;
