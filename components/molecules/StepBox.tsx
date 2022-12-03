import { Group, Paper, Text } from '@mantine/core';
import React from 'react';
import Title from '../atoms/Title';

interface Props {
  title: string;
  body: string;
}

function StepBox({ title, body }: Props) {
  return (
    <Paper withBorder radius="lg" shadow="xs" p="md">
      <Group>
        <Title text={title} style={{ fontSize: 13 }} />
        <Text>{body}</Text>
      </Group>
    </Paper>
  );
}

export default StepBox;
