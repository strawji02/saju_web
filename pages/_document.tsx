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
            crossOrigin="anonymous"
          />
          <link
            href="https://webfontworld.github.io/goodchoice/Jalnan.css"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
          <link
            href="https://webfontworld.github.io/haenam/haenam.css"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
          <meta property="og:title" content="너와 나의 하루" />
          <meta property="og:url" content="https://saju60.com" />
          <meta
            property="og:description"
            content="생년월일과 시간만으로도 당신의 성향과 심리를 빠르게 파악할 수 있답니다. MBTI보다 자세하고 섬세하게 당신을 설명하고 있어요."
          />
          <meta httpEquiv="Content-Language" content="ko" />
        </Head>
        <body style={{ minHeight: '100vh' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
