/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUserResultState } from '../utils/state';

function Result() {
  const router = useRouter();
  const { result, removeResult } = useUserResultState();
  console.log(result);

  useEffect(() => {
    if (!result) router.replace('/');
  }, [result]);

  return (
    <Modal fullScreen opened={true} onClose={() => removeResult()}>
      Enter
    </Modal>
  );
}

export default Result;
