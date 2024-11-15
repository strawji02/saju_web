import type { Metadata } from 'next';
import { Montserrat, Noto_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const jalnan = localFont({
  src: './fonts/Jalnan.ttf',
  display: 'swap',
  variable: '--font-jalnan',
});

const lotteMart = localFont({
  src: './fonts/LotteMart.woff2',
  display: 'swap',
  variable: '--font-lotte-mart',
});

const haenam = localFont({
  src: './fonts/haenam.ttf',
  display: 'swap',
  variable: '--font-haenam',
});

export const metadata: Metadata = {
  title: '너와 나의 하루',
  description:
    '생년월일과 시간만으로도 당신의 성향과 심리를 빠르게 파악할 수 있답니다. MBTI보다 자세하고 섬세하게 당신을 설명하고 있어요.',
  icons: {
    icon: [
      { url: '/favicon_32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_196.png', sizes: '196x196', type: 'image/png' },
    ],
  },
  authors: [{ name: '@strawji02' }],
  creator: 'Hwang Junhyeok',
  openGraph: {
    title: '너와 나의 하루',
    description:
      '생년월일과 시간만으로도 당신의 성향과 심리를 빠르게 파악할 수 있답니다. MBTI보다 자세하고 섬세하게 당신을 설명하고 있어요.',
    url: 'https://saju60.com',
    siteName: '너와 나의 하루',
    images: [
      {
        url: 'https://saju60.com/thumbnail.png',
        alt: '너와 나의 하루',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7739704599307320"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${notoSansKR.variable} ${montserrat.variable} ${jalnan.variable} ${lotteMart.variable} ${haenam.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
