import { Box, Group, Paper, SimpleGrid, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import { SAJU_60 } from '../../utils/utils';
import DefaultText from '../atoms/DefaultText';
import Title from '../atoms/Title';
import UnderLinedText from '../atoms/UnderLinedText';

export interface CompatibilityIljuProps {
  iljuIndex?: number[];
  isPositive: boolean;
}

function CompatibilityIlju({
  iljuIndex,
  isPositive,
  ...props
}: CompatibilityIljuProps) {
  return (
    <Paper radius="md" m="lg" mx="xl" p="xl" shadow="lg">
      <Box sx={{ position: 'relative' }}>
        <Image
          src={`/icons/compatibility${isPositive ? 1 : 5}.png`}
          width={120}
          height={120}
          alt="image"
          style={{ position: 'absolute', top: -55, left: -70 }}
        />
      </Box>
      <Stack align="center">
        <Title fz={28}>아주 {isPositive ? '긍정' : '부정'}적</Title>
        <SimpleGrid cols={2}>
          {iljuIndex?.map((ilju) => (
            <Group spacing={4} key={ilju}>
              <UnderLinedText fz={18} fw={200} ff="Haenam">
                {SAJU_60[ilju]}
              </UnderLinedText>
              <DefaultText component="span" fz={16} fw={200} ff="Haenam">
                일주 |{' '}
                <DefaultText
                  component="span"
                  fz={16}
                  fw={200}
                  ff="Haenam"
                  sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={() => {}}
                >
                  상세보기
                </DefaultText>
              </DefaultText>
            </Group>
          ))}
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}

export default CompatibilityIlju;
