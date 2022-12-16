import { Global } from '@mantine/core';

function Font() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Jalnan',
            src: `url('/fonts/Jalnan.ttf') format('truetype')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'LotteMartDream',
            fontStyle: 'normal',
            fontWeight: 900,
            src: `url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamBold.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamBold.woff') format('woff')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Montserrat',
            src: `url('/fonts/Montserrat-Regular.ttf') format('truetype')`,
            fontWeight: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Montserrat',
            src: `url('/fonts/Montserrat-SemiBold.ttf') format('truetype'))`,
            fontWeight: 'bold',
          },
        },
      ]}
    />
  );
}

export default Font;
