/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ResTemplate from '../components/template/ResTemplate';
import { useUserResultState } from '../utils/state';

function Result() {
  const router = useRouter();
  const { result, removeResult, userData, removeUserData } =
    useUserResultState();
  console.log(result);

  useEffect(() => {
    if (!result) router.replace('/');
  }, [result]);

  return (
    <Modal
      fullScreen
      opened={true}
      onClose={() => {
        removeResult();
      }}
    >
      <ResTemplate result={result} userData={userData} />
    </Modal>
  );
}

export default Result;
