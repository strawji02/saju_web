import type { AppProps } from 'next/app';
import {
  ButtonStylesParams,
  MantineProvider,
  MantineThemeOverride,
} from '@mantine/core';
import '../styles/globals.css';
import Head from 'next/head';
import CopyrightText from '../components/molecules/CopyrightText';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
// import '../styles/react-ios-time-picker.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });

  const theme: MantineThemeOverride = {
    primaryColor: 'dark-blue',
    components: {
      Text: {
        styles: (theme) => ({
          root: {
            color: theme.colors['dark-blue'][6],
          },
        }),
      },
    },
    globalStyles: (theme) => ({
      body: {
        ...theme.fn.fontStyles(),
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[7]
            : router.asPath === '/' || router.asPath.includes('home')
            ? '#eaeaea'
            : '#f5f5f5',
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        lineHeight: theme.lineHeight,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      '#__next': {
        // maxWidth: '425px',
        // border: 'solid',
        // borderTop: 'none',
        // borderBottom: 'none',
        width: '100%',
        height: '100%',
        // display: 'block',
        // overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        margin: 0,
      },
    }),
    // black: '#2d2da8',
    colors: {
      'dark-blue': [
        '#7272d9',
        '#6262d5',
        '#5353d1',
        '#4343cd',
        '#3535c7',
        '#3131b7',
        '#2d2da8',
        '#292999',
        '#252589',
        '#21217a',
        // '#1c1c6a',
      ],
    },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <Component {...pageProps} />
          </main>

          <footer>
            <CopyrightText />
          </footer>
        </>
      </MantineProvider>
    </QueryClientProvider>
  );
}
