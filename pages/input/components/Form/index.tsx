import { Chip, Select, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useWindowScroll } from '@mantine/hooks';
import 'dayjs/locale/ko';
import { useRouter } from 'next/router';
import { forwardRef, useRef } from 'react';
import { useQuery } from 'react-query';
import { getDosiNames } from '../../../../api/dosi';
import Loading from '../../../../components/Loading';
import { StepInputFormType } from '../../types';
import BirthInput from './BirthInput';
import GenderSelector from './GenderSelector';

interface Props {
  step: number;
  form: UseFormReturnType<
    StepInputFormType,
    (values: StepInputFormType) => StepInputFormType
  >;
  goToNextStep: () => void;
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
  },
);

SelectItem.displayName = 'SelectItem';

function Form({ step, form, goToNextStep }: Props) {
  const router = useRouter();
  const { data } = useQuery('get-dosi', getDosiNames, {
    onError: (data) => router.push('/error'),
  });

  const title = useRef<HTMLInputElement | null>(null);

  const [, scrollTo] = useWindowScroll();

  function onFocusScroll() {
    setTimeout(() => scrollTo({ y: 160 }), 200);
  }

  function onPressEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && e.currentTarget.value !== '') {
      e.preventDefault();
      goToNextStep();
    }
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
            onKeyDown={onPressEnter}
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
                flexDirection: 'row!important' as any,
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
