import { Box, Center, Divider, Flex, Grid, Group } from '@mantine/core';
import Title from '../atoms/Title';
import { useMediaQuery } from '@mantine/hooks';

interface Props {
  leftArea?: React.ReactNode;
  rightArea?: React.ReactNode;
  title: string;
}

function Topbar({ leftArea, rightArea, title }: Props) {
  const isMini = useMediaQuery('(max-width: 425px)');
  // console.log(isMini);

  return (
    <div>
      <Grid pt={56} px={22} m={0}>
        <Grid.Col p={0} span="auto">
          <Flex align={'center'} justify={'flex-start'} h={'100%'} w={'100%'}>
            {leftArea}
          </Flex>
        </Grid.Col>
        <Grid.Col p={0} span={8}>
          <Center h="100%">
            <Title text={title} fz={isMini ? 22 : 28} />
          </Center>
        </Grid.Col>
        <Grid.Col p={0} span="auto">
          <Flex align={'center'} justify={'flex-end'} h={'100%'} w={'100%'}>
            {rightArea}
          </Flex>
        </Grid.Col>
      </Grid>
      <Divider mt={21} />
    </div>
  );
}

export default Topbar;
