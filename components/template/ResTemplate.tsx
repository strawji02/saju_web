import {
  Box,
  Button,
  Center,
  Divider,
  List,
  Mark,
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
import { RefObject, useCallback, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import CopyToClipboard from 'react-copy-to-clipboard';
import ResultButtons from '../organism/ResultButtons';
import DescriptionText from '../molecules/DescriptionText';

export interface ResTemplateProps {
  descriptionTextComponent: React.ReactNode;
  iljuDescriptionTextComponent: React.ReactNode;
  resultbuttonsComponent: React.ReactNode;
  imgRef: RefObject<HTMLDivElement>;
}
function ResTemplate({ imgRef, ...components }: ResTemplateProps) {
  const {
    descriptionTextComponent,
    iljuDescriptionTextComponent,
    resultbuttonsComponent,
  } = components;

  return (
    <>
      <Stack px="xs" my="lg" ref={imgRef} bg="#fff">
        {descriptionTextComponent}
        {iljuDescriptionTextComponent}
      </Stack>
      {resultbuttonsComponent}
    </>
  );
}

export default ResTemplate;
