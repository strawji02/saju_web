import { Box, Divider, Modal } from '@mantine/core';
import React, { useState } from 'react';
import Layout from '../layout/Layout';
import HomeDescriptText from '../organism/HomeDescriptText';
import HomeStepBox from '../organism/HomeStepBox';
import HomeTopBar from '../organism/HomeTopBar';

interface Props {
  // svg: any;
  // href: string;
  topBarComponent: React.ReactNode;
  descriptionTextComponent: React.ReactNode;
  nextButtonComponent: React.ReactNode;
}

function HomeTemplate({ ...components }: Props) {
  const { descriptionTextComponent, nextButtonComponent, topBarComponent } =
    components;

  return (
    <>
      <Layout color="#eaeaea">
        <Box style={{ backgroundColor: '#f5f5f5' }}>
          {topBarComponent}
          {descriptionTextComponent}
        </Box>
        {nextButtonComponent}
      </Layout>
    </>
  );
}

export default HomeTemplate;
