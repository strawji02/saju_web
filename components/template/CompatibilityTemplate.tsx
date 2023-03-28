import { Stack } from '@mantine/core';
import React from 'react';

export interface CompatibilityTemplateProps {
  children: React.ReactNode;
}

function CompatibilityTemplate({
  children,
  ...props
}: CompatibilityTemplateProps) {
  return <Stack spacing={40}>{children}</Stack>;
}

export default CompatibilityTemplate;
