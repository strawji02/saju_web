import { ActionIcon, Divider, Group } from '@mantine/core';
import Title from '../atoms/Title';
import { IconMenu2 } from '@tabler/icons';

function HomeTopBar() {
  return (
    <>
      <Group pt={56} px={22} position="apart">
        <Title text="너와 나의 하루" style={{ fontSize: 22 }} />
        <ActionIcon size="lg">
          <IconMenu2 size={40} />
        </ActionIcon>
      </Group>
      <Divider mt={21} />
    </>
  );
}

export default HomeTopBar;
