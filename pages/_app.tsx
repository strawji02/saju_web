import { AppProps } from 'next/app';
import Head from 'next/head';
import { Center, Container, MantineProvider } from '@mantine/core';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>간산 철학원</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
          fontFamily: 'Open Sans, sans serif',
        }}
      >
        <Center style={{ height: '100vh', backgroundColor: '#333333' }}>
          <Container
            style={{
              height: '100%',
              // backgroundColor: '#ffffff',
              maxWidth: 350,
              width: 350,
            }}
          >
            <Component {...pageProps} />
          </Container>
        </Center>
      </MantineProvider>{' '}
    </>
  );
}
