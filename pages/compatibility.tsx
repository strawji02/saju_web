import { Box, Modal, Skeleton } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ArrowLeftButton from '../components/atoms/ArrowLeftButton';
import LayoutTemplate from '../components/template/LayoutTemplate';
import Topbar from '../components/molecules/Topbar';
import CompatibilityIlju, {
  CompatibilityIljuProps,
} from '../components/organism/CompatibilityIlju';
import CompatibilityTemplate from '../components/template/CompatibilityTemplate';
import { SAJU_60 } from '../utils/utils';
import IljuModalContents from '../components/organism/IljuModalContents';

function Compatibility() {
  const router = useRouter();
  const pos = router.query.positive as string | undefined;
  const neg = router.query.negative as string | undefined;
  const positive = pos?.split(',').map(Number);
  const negative = neg?.split(',').map(Number);

  const [iljuModalState, setIljuModalState] = useState<number>();

  console.log(positive, negative);

  const compatibilityIljuPropsArr: Omit<
    CompatibilityIljuProps,
    'setIljuModalState'
  >[] = [
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
      <CompatibilityTemplate>
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
      </CompatibilityTemplate>
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
