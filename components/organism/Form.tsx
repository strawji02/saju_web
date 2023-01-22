import {
  Avatar,
  Badge,
  Button,
  Chip,
  Group,
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
import { forwardRef, useRef } from 'react';
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
interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
  'data-selected': any;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ label, 'aria-selected': AS, ...others }: ItemProps, ref) => {
    return (
      <div ref={ref} {...others} data-selected={undefined}>
        <Chip
          size="sm"
          checked={others['data-selected']}
          variant="filled"
          style={{ width: undefined }}
        >
          {label}
        </Chip>
      </div>
    );
  }
);

SelectItem.displayName = 'SelectItem';

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
            itemComponent={SelectItem}
            styles={{
              itemsWrapper: {
                boxSizing: 'border-box',
                display: 'flex',
                flexFlow: 'row wrap',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                WebkitBoxPack: 'start',
                justifyContent: 'center',
                gap: 10,
                flexDirection: 'row !important',
                padding: 10,
              },
              item: {
                width: 'fit-content',
                padding: 2,
              },
            }}
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
