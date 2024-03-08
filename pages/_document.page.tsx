import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon_32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="196x196"
            href="/favicon_196.png"
          />
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
          <meta property="og:image" content="/images/thumbnail.png" />
          <meta httpEquiv="Content-Language" content="ko" />

          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7739704599307320"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body style={{ minHeight: '100dvh' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
