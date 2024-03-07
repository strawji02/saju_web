import { Center, Loader } from '@mantine/core';

interface Props {
  height?: number;
}

function Loading({ height }: Props) {
  return (
    <Center h={height || 80} w={'100%'}>
      <Loader />
    </Center>
  );
}
export default Loading;
