import { Box, Divider, Flex, Image, Stack, Text } from '@mantine/core';
import ShortDivider from '../atoms/ShortDivider';
import Title from '../atoms/Title';

interface Props {
  svg?: any;
}

function HomeDescriptText({ svg: SvgComp }: Props) {
  return (
    <Stack ml={28} mt={70} spacing={26} align="flex-start">
      <ShortDivider />
      <Box>
        <Title text="너와 나의 하루는" fz={18} />
        <Title text="당신의 삶이 궁금합니다." fz={18} />
      </Box>
      <Text align="left">
        <Text component="span" fw="bold">
          당신의 생년월일
        </Text>
        과{' '}
        <Text component="span" fw="bold">
          태어난 시간
        </Text>
        을 입력하세요.
        <br /> 생년월일과 시간만으로도 <br /> 당신의 성향과 심리를 빠르게 파악할
        수 있답니다. <br /> MBTI보다 자세하고 섬세하게 당신을 설명하고 있어요.
      </Text>

      <ShortDivider my={25} />
      <Box>
        <Title text="너와 나의 하루는" fz={18} />
        <Title text="당신과 상대방의 관계가 궁금합니다." fz={18} />
      </Box>
      <Flex w={'100%'}>
        <Stack justify="space-between">
          <Text align="left">
            당신과 상대방 두 사람의{' '}
            <Text component="span" fw="bold">
              관계적합도
            </Text>
            를 5단계로 구분하여 알려드려요.
          </Text>
          <Text align="left" fz={12} mb="lg">
            본 서비스는 [(증보신판)] [간산 사주명리 일주론]에 수록된 내용을
            기초로 작성했어요.
          </Text>
        </Stack>
        <Flex align="flex-end" style={{}}>
          {SvgComp ? (
            <SvgComp />
          ) : (
            <Box w={130} h={137} style={{ border: 'solid' }} />
          )}
        </Flex>
      </Flex>
    </Stack>
  );
}

export default HomeDescriptText;
