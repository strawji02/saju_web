import { Box } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import svg from '../components/assets/Group.svg';
import Layout from '../components/Layout';
import DescriptText from './components/DescriptText';
import StepBox from './components/StepBox';
import TopBar from './components/TopBar';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if ('ilju' in router.query && 'username' in router.query) {
      sessionStorage.setItem(
        'shared-ilju',
        JSON.stringify({
          ilju: router.query.ilju,
          username: router.query.username,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return (
    <>
      <Layout color="#eaeaea">
        <Box style={{ backgroundColor: '#f5f5f5' }}>
          <TopBar />
          <DescriptText svg={svg} />
        </Box>
        <StepBox href={`/input?step=1`} />
      </Layout>
    </>
  );
}
