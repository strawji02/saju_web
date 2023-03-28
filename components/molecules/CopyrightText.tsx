import { Anchor, Stack, Text } from '@mantine/core';
import React from 'react';

function CopyrightText() {
  return (
    <Stack mt="lg" mb="lg" spacing={0} align="center">
      <Text style={{ fontSize: 10, color: 'gray' }}>
        이메일 :{' '}
        <a
          style={{ textDecoration: 'underline' }}
          href="mailto:gansansaju@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          gansansaju@gmail.com
        </a>
      </Text>
      <Text style={{ fontSize: 10, color: 'gray' }}>
        Copyright©www.saju60.com All Rights Reserved.
      </Text>
    </Stack>
  );
}

export default CopyrightText;
