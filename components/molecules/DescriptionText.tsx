import { Paper, Text } from '@mantine/core';

export interface DescriptionTextProps {
  texts: string[];
}

function DescriptionText({ texts, ...props }: DescriptionTextProps) {
  return (
    <Paper
      sx={{ borderColor: '#2d2da8' }}
      shadow="xl"
      withBorder
      ta="center"
      p="lg"
      radius="md"
      mb="xl"
    >
      {texts.map((text) => (
        <Text fz={16} fw={400} key={text}>
          {text}
        </Text>
      ))}
    </Paper>
  );
}
export default DescriptionText;
