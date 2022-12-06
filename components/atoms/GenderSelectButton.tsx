import { Image, Paper, Stack, Text, useMantineTheme } from '@mantine/core';
import { IconGenderFemale, IconGenderMale } from '@tabler/icons';

interface Props {
  gender: '남자' | '여자';
  selected: boolean;
}

function GenderSelectButton({ gender, selected }: Props) {
  const theme = useMantineTheme();
  const mainColor = selected
    ? theme.colors['dark-blue'][6]
    : theme.colors.gray[4];

  const iconProps = { color: mainColor, size: 100 };

  return (
    <Paper
      sx={(theme) => ({
        borderColor: mainColor,
      })}
      w={174}
      h={174}
      radius="xl"
      withBorder
      shadow="sm"
    >
      <Stack spacing={2} py={24} h="100%" align="center" justify="space-around">
        {gender === '남자' ? (
          <IconGenderMale {...iconProps} />
        ) : (
          <IconGenderFemale {...iconProps} />
        )}
        <Text style={{ fontSize: 20, color: mainColor }}>{gender}</Text>
      </Stack>
    </Paper>
  );
}

export default GenderSelectButton;
