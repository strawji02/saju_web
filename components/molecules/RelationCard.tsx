import { Paper, Stack, Text } from '@mantine/core';
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
      sx={(theme) => ({ backgroundColor: theme.colors.gray[3] })}
      radius={10}
    >
      <Stack spacing={0}>
        <SajuImage
          sajuNo={sajuNo}
          width={160}
          height={160}
          style={{ borderRadius: 10 }}
        />
        <Text c="gray.8" fz={20} fw={900} ta="center">
          {userName}
        </Text>
        <Text ta="center">{userIlju}</Text>
      </Stack>
    </Paper>
  );
}

export default RelationCard;
