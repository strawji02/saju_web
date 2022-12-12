import {
  Button,
  MantineProvider,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { UseFormReturnType } from '@mantine/form';
import GenderSelector from '../molecules/GenderSelector';
import BirthInput from './BirthInput';
import { Dosi, StepInputFormType } from '../types/StepInput';
import 'dayjs/locale/ko';
import { useWindowScroll } from '@mantine/hooks';
import { useRef } from 'react';
import { useQuery } from 'react-query';
import { getDosiNames } from '../api/dosi';
import Loading from '../atoms/Loading';

interface Props {
  step: number;
  form: UseFormReturnType<
    StepInputFormType,
    (values: StepInputFormType) => StepInputFormType
  >;
}

function Form({ step, form }: Props) {
  const { data } = useQuery('get-dosi', getDosiNames);

  const title = useRef<HTMLInputElement | null>(null);

  const [, scrollTo] = useWindowScroll();

  function onFocusScroll() {
    setTimeout(() => scrollTo({ y: 160 }), 200);
  }

  switch (step) {
    case 1:
      return (
        <>
          <TextInput
            placeholder="이름을 입력해주세요"
            size="lg"
            radius="md"
            autoFocus
            ref={title}
            {...form.getInputProps('name')}
            onFocus={onFocusScroll}
          />
        </>
      );
    case 2:
      return (
        <>
          <GenderSelector form={form} />
        </>
      );
    case 3:
      return data ? (
        <>
          <Select
            data={data}
            placeholder="이곳을 눌러 검색해주세요"
            searchable
            maxDropdownHeight={300}
            mt={32}
            radius="md"
            size="xl"
            dropdownPosition="bottom"
            autoFocus
            {...form.getInputProps('birthPlace')}
            onFocus={onFocusScroll}
          />
        </>
      ) : (
        <Loading />
      );
    case 4:
      return (
        <>
          <BirthInput form={form} />
        </>
      );
    default:
      return <></>;
  }
}

export default Form;
