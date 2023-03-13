import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://webfontworld.github.io/goodchoice/Jalnan.css"
            rel="stylesheet"
          />
        </Head>
        <body style={{ minHeight: '100vh' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
