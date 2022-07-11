import { AppProps } from 'next/app';
import Head from 'next/head';
import { Center, Container, MantineProvider } from '@mantine/core';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>간산 철학원</title>
          <meta charSet="UTF - 8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta name="Keywords" content="Saju" />
          <meta name="Keywords" content="사주, 사주명리, 명리, 일주" />
          <meta
            name="Description"
            content="생년월일을 기반으로 한 개인의 사주명리 일주"
          />
          <meta name="robots" content="index, follow" />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
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
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}
