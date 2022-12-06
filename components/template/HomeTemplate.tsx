import { Box, Divider } from '@mantine/core';
import React from 'react';
import Layout from '../layout/Layout';
import HomeDescriptText from '../organism/HomeDescriptText';
import HomeStepBox from '../organism/HomeStepBox';
import HomeTopBar from '../organism/HomeTopBar';

interface Props {
  svg: any;
  href: string;
}

function HomeTemplate({ svg, href }: Props) {
  return (
    <>
      <Layout color="#eaeaea">
        <Box style={{ backgroundColor: '#f5f5f5' }}>
          <HomeTopBar />
          <HomeDescriptText svg={svg} />
        </Box>
        <HomeStepBox href={href} />
      </Layout>
    </>
  );
}

export default HomeTemplate;
