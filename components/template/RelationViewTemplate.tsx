import { Stack } from '@mantine/core';
import { ReactNode } from 'react';

export interface RelationViewTemplateProps {
  relationUser: ReactNode;
}

function RelationViewTemplate({ ...props }: RelationViewTemplateProps) {
  return <Stack>{}</Stack>;
}

export default RelationViewTemplate;
