import { Group } from '@mantine/core';
import { useState } from 'react';
import GenderSelectButton from '../atoms/GenderSelectButton';
import { Gender } from '../types/StepInput';

function GenderSelector() {
  const [gender, setGender] = useState<Gender | undefined>(undefined);

  return (
    <Group w={'100%'} position="center" spacing="xl">
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
