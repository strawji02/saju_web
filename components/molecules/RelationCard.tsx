import { Group, Paper, Stack, Text } from '@mantine/core';
import SajuImage from '../atoms/SajuImage';

export interface RealtionCardProps {
  sajuNo: string;
  userName: string;
  userIlju: string;
}

function RelationCard({ sajuNo, userIlju, userName }: RealtionCardProps) {
  return (
    <Paper
      shadow="lg"
      p="xs"
      sx={(theme) => ({ backgroundColor: theme.colors.gray[2] })}
      radius="xl"
      w={'100%'}
    >
      <Group spacing={0}>
        <SajuImage
          sajuNo={sajuNo}
          width={100}
          height={100}
          style={{ borderRadius: 10 }}
        />
        <Stack spacing={0} align="flex-start">
          <Text c="#606060" fw={400} fz={20}>
            {userIlju}
          </Text>
          <Text c="gray.7" fz={20} fw={900} ta="center">
            {userName}
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
}

export default RelationCard;
