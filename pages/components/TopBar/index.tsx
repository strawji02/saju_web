import { ActionIcon, Divider, Drawer, Group, Stack } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Title from '../../../components/Title';
import MenuButton from './MenuButton';

function TopBar() {
  const [opened, setOpened] = useState(false);
  const router = useRouter();

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
          <MenuButton onClick={() => setOpened(false)}>Home</MenuButton>
          <Divider size={3} sx={{ borderTopColor: '#f3f3f3' }} />
          <MenuButton onClick={() => router.push('/service')}>
            서비스 소개
          </MenuButton>
          <Divider size={3} sx={{ borderTopColor: '#f3f3f3' }} />
          <MenuButton
            onClick={() =>
              router.push({ pathname: '/service', query: { contect: true } })
            }
          >
            제휴 문의
          </MenuButton>
        </Stack>
      </Drawer>
    </>
  );
}

export default TopBar;
