import { Divider, Paper, Text } from '@mantine/core';
import Head from 'next/head';
import Title from '../components/atoms/Title';
import { useEffect, useState } from 'react';
import TimePicker from '../components/@shared/ios-time-picker/TimePicker';
import HomeTopBar from '../components/organism/HomeTopBar';
import HomeDescriptText from '../components/organism/HomeDescriptText';
import HomeStepBox from '../components/organism/HomeStepBox';
import svg from '../public/Group 43.svg';
import HomeTemplate from '../components/template/HomeTemplate';

export default function Home() {
  const [value, setValue] = useState<any>('10:00');
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined');
  }, []);

  const onChange = (timeValue: any) => {
    setValue(timeValue);
  };

  return isBrowser ? <HomeTemplate href="/step" svg={svg} /> : null;
}
