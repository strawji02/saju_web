import { Autocomplete, Center, Loader } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getDosiNames } from '../api/dosi';
import { StepInputFormType } from '../types/StepInput';

interface Props {
  form: UseFormReturnType<
    StepInputFormType,
    (values: StepInputFormType) => StepInputFormType
  >;
}
function Loading() {
  return (
    <Center h={80} w={'100%'}>
      <Loader />
    </Center>
  );
}
function BirthPlaceSelector({ form }: Props) {
  const { data } = useQuery('get-dosi', getDosiNames);
  const [value, setValue] = useState(form.values.birthPlace);
  useEffect(() => {
    setValue(form.values.birthPlace);
  }, [form.values.birthPlace]);

  return (
    <>
      <Autocomplete
        mt={32}
        dropdownComponent={data ? 'div' : Loading}
        maxDropdownHeight="30vh"
        placeholder="이곳을 눌러 검색해주세요"
        onFocus={(e) => e.target.select()}
        data={data || [{ label: '로딩중', value: '' }]}
        limit={data?.length}
        radius="md"
        size="xl"
        value={value}
        onChange={setValue}
        onItemSubmit={(item) => {
          form.setValues({ birthPlace: item.value });
        }}
        onDropdownClose={() => setValue(form.values.birthPlace)}
        required
      />
    </>
  );
}

export default BirthPlaceSelector;
