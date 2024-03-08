import { Group } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useEffect, useState } from 'react';
import { Gender, StepInputFormType } from '../../../../utils/types';
import GenderSelectButton from './GenderSelectButton';

interface Props {
  form: UseFormReturnType<
    StepInputFormType,
    (values: StepInputFormType) => StepInputFormType
  >;
}

function GenderSelector({ form }: Props) {
  const [gender, setGender] = useState<Gender | undefined>(form.values.gender);

  useEffect(() => {
    if (gender) {
      form.setValues({ gender });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender]);

  return (
    <Group w={'100%'} position="center">
      <GenderSelectButton
        onClick={() => setGender('남자')}
        selected={gender === '남자'}
        gender="남자"
      />
      <GenderSelectButton
        onClick={() => setGender('여자')}
        selected={gender === '여자'}
        gender="여자"
      />
    </Group>
  );
}

export default GenderSelector;
