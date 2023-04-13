import { useEffect, useState } from 'react';
import svg from '../components/assets/Group.svg';
import HomeTemplate from '../components/template/HomeTemplate';
import { useWindowScroll } from '@mantine/hooks';
import { Box, Button, Text } from '@mantine/core';
import HomeTopBar from '../components/organism/HomeTopBar';
import HomeDescriptText from '../components/organism/HomeDescriptText';
import HomeStepBox from '../components/organism/HomeStepBox';
import { useRouter } from 'next/router';
import { useShareParamState } from '../utils/state';
import LayoutTemplate from '../components/template/LayoutTemplate';

export default function Home() {
  const router = useRouter();

  const { setData, ilju } = useShareParamState();
  useEffect(() => {
    if ('ilju' in router.query && 'username' in router.query) {
      console.log(router.query);
      setData({
        ilju: parseInt(router.query.ilju as string),
        username: router.query.username as string,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return (
    <>
      <LayoutTemplate color="#eaeaea">
        <HomeTemplate
          topBarComponent={<HomeTopBar />}
          descriptionTextComponent={<HomeDescriptText svg={svg} />}
          nextButtonComponent={<HomeStepBox href={`/input?step=1`} />}
        />
      </LayoutTemplate>
    </>
  );
}
