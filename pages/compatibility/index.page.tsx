import { Modal, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ArrowLeftButton from '../../components/ArrowLeftButton';
import Topbar from '../../components/Topbar';
import CompatibilityIlju from './components/CompatibilityIlju';
import IljuModalContents from './components/IljuModalContents';

function Compatibility() {
  const router = useRouter();
  const pos = router.query.positive as string | undefined;
  const neg = router.query.negative as string | undefined;
  const positive = pos?.split(',').map(Number);
  const negative = neg?.split(',').map(Number);

  const [iljuModalState, setIljuModalState] = useState<number>();

  const compatibilityIljuPropsArr = [
    {
      iljuIndex: positive,
      isPositive: true,
    },
    {
      iljuIndex: negative,
      isPositive: false,
    },
  ];

  return (
    <>
      <Stack spacing={40}>
        <Topbar
          title="나랑 맞는/안맞는 일주"
          leftArea={<ArrowLeftButton onClick={() => router.back()} />}
        />
        {compatibilityIljuPropsArr.map((props, index) => (
          <CompatibilityIlju
            setIljuModalState={setIljuModalState}
            {...props}
            key={`compatibility-${index}`}
          />
        ))}
      </Stack>

      <Modal
        opened={!!iljuModalState}
        onClose={() => setIljuModalState(undefined)}
        centered
        radius="xl"
        exitTransitionDuration={200}
      >
        <IljuModalContents ilju={iljuModalState} />
      </Modal>
    </>
  );
}

export default Compatibility;
