import {
  ActionIcon,
  Box,
  Button,
  Center,
  Divider,
  Group,
  List,
  Mark,
  Modal,
  Paper,
  Stack,
  Text,
} from '@mantine/core';
import { padStart } from 'lodash';
import Image from 'next/image';
// import { lotteMart } from '../../utils/fonts';
import DefaultText from '../atoms/DefaultText';
import Title from '../atoms/Title';
import UnderLinedText from '../atoms/UnderLinedText';
import { ResultType, StepInputFormType } from '../types/StepInput';
import stringReplace from 'react-string-replace';
import UnderLinedDescription from '../molecules/UnderLinedDescription';
import { SAJU_60 } from '../../utils/utils';
import { useRouter } from 'next/router';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import CopyToClipboard from 'react-copy-to-clipboard';
import ResultButtons from '../organism/ResultButtons';
import DescriptionText from '../molecules/DescriptionText';
import { IconX } from '@tabler/icons';

export interface ResTemplateProps {
  descriptionTextComponent: React.ReactNode;
  iljuDescriptionTextComponent: React.ReactNode;
  resultbuttonsComponent: React.ReactNode;
  imgRef: RefObject<HTMLDivElement>;
  relationModalComponent: React.ReactNode;
  relation?: string;
}
function ResTemplate({ imgRef, relation, ...components }: ResTemplateProps) {
  const {
    descriptionTextComponent,
    iljuDescriptionTextComponent,
    resultbuttonsComponent,
    relationModalComponent,
  } = components;
  const router = useRouter();

  const relationModalOpened = !!router.query.modal;
  const setRelationModalOpened = (state: boolean) =>
    router.push({ query: state ? { modal: true } : {} });

  useEffect(() => {
    if (relation) {
      setTimeout(() => {
        setRelationModalOpened(true);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack p="lg">
      <Group position="right">
        {relation && (
          <Button onClick={() => setRelationModalOpened(true)}>
            {relation}님과의 궁합 다시보기
          </Button>
        )}
        <ActionIcon onClick={() => router.push('/')}>
          <IconX size={18} />
        </ActionIcon>
      </Group>
      <Box>
        <Stack px="xs" my="lg" ref={imgRef} bg="#fff">
          {descriptionTextComponent}
          {iljuDescriptionTextComponent}
        </Stack>
        {resultbuttonsComponent}
        <Modal
          onClose={() => setRelationModalOpened(false)}
          opened={relationModalOpened}
          exitTransitionDuration={500}
          transitionDuration={700}
          transition="slide-up"
          fullScreen
        >
          <Box m="auto" maw={500}>
            {relationModalComponent}
          </Box>
        </Modal>
      </Box>
    </Stack>
  );
}

export default ResTemplate;
