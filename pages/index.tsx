import { Button, Center, Grid } from '@mantine/core';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Grid justify="center" align="flex-end" style={{ height: '100%' }}>
      <Grid.Col>
        <Center style={{}}>간산 60일주</Center>
      </Grid.Col>
      <Grid.Col>
        <Center style={{ height: '20vh' }}>
          <Link href="/input/name" passHref>
            <Button component="a" style={{ width: '100%' }}>
              Next
            </Button>
          </Link>
        </Center>
      </Grid.Col>
    </Grid>
  );
};

export default Home;
