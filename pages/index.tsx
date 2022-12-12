import { useEffect, useState } from 'react';
import svg from '../public/Group 43.svg';
import HomeTemplate from '../components/template/HomeTemplate';
import { useWindowScroll } from '@mantine/hooks';
import { Box, Button, Text } from '@mantine/core';

export default function Home() {
  return (
    <>
      <HomeTemplate href="/input?step=1" svg={svg} />
    </>
  );
}
