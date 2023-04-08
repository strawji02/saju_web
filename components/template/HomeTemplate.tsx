import { Box, Divider, Modal } from '@mantine/core';
import React, { useState } from 'react';

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
      <Box style={{ backgroundColor: '#f5f5f5' }}>
        {topBarComponent}
        {descriptionTextComponent}
      </Box>
      {nextButtonComponent}
    </>
  );
}

export default HomeTemplate;
