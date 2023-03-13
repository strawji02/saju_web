import { ActionIcon, Divider, Drawer, Group, Stack, Text } from '@mantine/core';
import Title from '../atoms/Title';
import { IconMenu2 } from '@tabler/icons';
import { useState } from 'react';
import MenuButton from '../atoms/MenuButton';

function HomeTopBar() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group pt={56} px={22} position="apart">
        <Title text="너와 나의 하루" fz={22} />
        <ActionIcon onClick={() => setOpened(true)} size="lg">
          <IconMenu2 size={40} />
        </ActionIcon>
      </Group>
      <Divider mt={21} />
      <Drawer
        opened={opened}
        position="right"
        onClose={() => setOpened(false)}
        // title="Register"
        padding="xl"
        size="md"
      >
        <Stack px={12} py={30}>
          <MenuButton>Home</MenuButton>
          <Divider size={3} sx={{ borderTopColor: '#f3f3f3' }} />
          <MenuButton>서비스 소개</MenuButton>
          <Divider size={3} sx={{ borderTopColor: '#f3f3f3' }} />
          <MenuButton>제휴 문의</MenuButton>
        </Stack>
      </Drawer>
    </>
  );
}

export default HomeTopBar;
