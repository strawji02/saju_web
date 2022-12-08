import { Image, Paper, Stack, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconGenderFemale, IconGenderMale } from '@tabler/icons';
import { MouseEventHandler } from 'react';
import { Gender } from '../types/StepInput';

interface Props {
  gender: Gender;
  selected: boolean;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

function GenderSelectButton({ gender, selected, onClick }: Props) {
  const matches = useMediaQuery('(min-width: 425px)');

  const theme = useMantineTheme();
  const mainColor = selected
    ? theme.colors['dark-blue'][6]
    : theme.colors.gray[5];

  const iconProps = { color: mainColor, size: 100 };

  return (
    <Paper
      sx={(theme) => ({
        borderColor: mainColor,
        borderWidth: 2,
        ':hover': {
          cursor: 'pointer',
          backgroundColor: theme.colors.gray[1],
        },
      })}
      w={matches ? 174 : 120}
      h={matches ? 174 : 120}
      radius="xl"
      withBorder
      shadow="sm"
      onClick={onClick}
    >
      <Stack spacing={2} py={24} h="100%" align="center" justify="space-around">
        {gender === '남자' ? (
          <IconGenderMale {...iconProps} />
        ) : (
          <IconGenderFemale {...iconProps} />
        )}
        <Text
          style={{
            fontSize: 20,
            color: mainColor,
            userSelect: 'none',
            msUserSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
          }}
        >
          {gender}
        </Text>
      </Stack>
    </Paper>
  );
}

export default GenderSelectButton;
