import { Box, Group, Paper, SimpleGrid, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DefaultText from '../../../components/DefaultText';
import Title from '../../../components/Title';
import UnderLinedText from '../../../components/UnderLinedText';
import { SAJU_60 } from '../../../utils/utils';

export interface CompatibilityIljuProps {
  iljuIndex?: number[];
  isPositive: boolean;
  setIljuModalState: React.Dispatch<React.SetStateAction<number | undefined>>;
}

function CompatibilityIlju({
  iljuIndex,
  isPositive,
  setIljuModalState,
  ...props
}: CompatibilityIljuProps) {
  const isMini = useMediaQuery('(max-width: 425px)');
  const fz = isMini ? 14 : 16;

  const router = useRouter();

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
            <Group spacing={isMini ? 2 : 4} key={ilju}>
              <Box>
                <UnderLinedText fz={fz} fw={200} ff="Haenam">
                  {SAJU_60[ilju]}
                </UnderLinedText>
                <DefaultText component="span" fz={fz} fw={200} ff="Haenam">
                  일주
                </DefaultText>
              </Box>
              <DefaultText fz={fz} fw={200} ff="Haenam">
                |
              </DefaultText>
              <DefaultText
                component="span"
                fz={fz}
                fw={200}
                ff="Haenam"
                sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => setIljuModalState(ilju)}
              >
                상세보기
              </DefaultText>
            </Group>
          ))}
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}

export default CompatibilityIlju;
