import {
  Box,
  MantineProvider,
  MantineThemeOverride,
  Paper,
  Stack,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import CopyrightText from '../components/CopyrightText';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const matches = useMediaQuery('(min-width: 530px)');

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
            fontFamily: 'NotoSansCJKKR',
            fontSize: 15,
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            wordBreak: 'keep-all',
          },
        }),
      },
      Button: {
        defaultProps: {
          radius: 'xl',
        },
      },
    },
    globalStyles: (theme) => ({
      body: {
        ...theme.fn.fontStyles(),
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        lineHeight: theme.lineHeight,
      },
      '#__next': {
        height: '100%',
        margin: 0,
      },
    }),
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
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <Box
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Paper
            sx={{
              width: '100%',
              minWidth: 320,
              minHeight: '100vh',
              boxShadow: matches
                ? '0 4px 4px rgb(0 23 80 / 1%), 0 1px 6px rgb(0 23 80 / 2%), 0 8px 8px rgb(0 23 80 / 1%), 0 16px 16px rgb(0 23 80 / 1%), 8px 32px 32px rgb(0 23 80 / 2%), 8px 64px 64px rgb(0 23 80 / 2%)'
                : undefined,
            }}
            style={{
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors?.dark?.[7]
                  : router.asPath === '/' || router.asPath.includes('home')
                    ? '#eaeaea'
                    : router.asPath.includes('result')
                      ? '#fff'
                      : '#f5f5f5',
            }}
          >
            <Head>
              <title>너와 나의 하루</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Analytics />
            <Stack justify="space-between" sx={{ height: '100%' }}>
              <main>
                <Component {...pageProps} />
              </main>

              <footer>
                <CopyrightText />
              </footer>
            </Stack>
          </Paper>
        </Box>
      </MantineProvider>
    </QueryClientProvider>
  );
}
