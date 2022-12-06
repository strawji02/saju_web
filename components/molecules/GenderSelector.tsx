import { Group } from '@mantine/core';
import GenderSelectButton from '../atoms/GenderSelectButton';

function GenderSelector() {
  return (
    <Group>
      <GenderSelectButton selected={true} gender="남자" />
      <GenderSelectButton selected={true} gender="여자" />
    </Group>
  );
}

export default GenderSelector;
