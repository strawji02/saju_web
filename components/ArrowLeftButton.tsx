import { ActionIcon, useMantineTheme } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import { useRouter } from 'next/router';

interface Props {
  onClick?: () => void;
}

function ArrowLeftButton({ onClick }: Props) {
  const theme = useMantineTheme();
  const router = useRouter();

  return (
    <ActionIcon onClick={onClick || (() => router.back())} size={'xl'}>
      <IconArrowLeft size={30} color={theme.colors['dark-blue'][6]} />
    </ActionIcon>
  );
}

export default ArrowLeftButton;
