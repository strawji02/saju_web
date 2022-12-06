import { ActionIcon, useMantineTheme } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import { url } from 'inspector';
import _ from 'lodash';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import StepInputTemplate from '../components/template/StepInputTemplate';

function Step() {
  const router = useRouter();
  const queryStep = router.query['step'];
  const step = typeof queryStep === 'string' ? parseInt(queryStep) : undefined;
  console.log(step);

  useEffect(() => {
    if (_.isEmpty(router.query) && queryStep) router.replace('/');
    if (step !== undefined && (step > 4 || step < 1)) router.replace('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query, queryStep, step]);
  if (!step) return <></>;

  return (
    <div>
      <StepInputTemplate step={step} />
    </div>
  );
}

export default Step;
