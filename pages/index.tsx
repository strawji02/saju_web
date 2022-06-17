import {
  Button,
  Center,
  Grid,
  Radio,
  RadioGroup,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useUserState } from '../store/store';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const form = useForm({
    initialValues: { name: '', gender: 1 },
    validate: (values) => ({
      name: values.name.length < 2 ? 'Too short name' : null,
    }),
  });
  const { setName, setGender } = useUserState();
  return (
    <Grid justify="center" align="center">
      <Grid.Col>
        <Center style={{ height: '80vh' }}>간산 60일주</Center>
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
