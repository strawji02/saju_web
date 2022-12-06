import { useEffect, useState } from 'react';
import svg from '../public/Group 43.svg';
import HomeTemplate from '../components/template/HomeTemplate';

export default function Home() {
  const [value, setValue] = useState<any>('10:00');
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined');
  }, []);

  const onChange = (timeValue: any) => {
    setValue(timeValue);
  };

  return isBrowser ? <HomeTemplate href="/input?step=1" svg={svg} /> : null;
}
