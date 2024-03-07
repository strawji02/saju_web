import axios from 'axios';
import { Dosi } from '../pages/input/types';

export async function getDosiNames() {
  const res = await axios.get('https://server.saju60.com/dosi.php');
  const resData = await res.data.split('\n');
  const dosi: Dosi = resData
    .map((d: string) => {
      if (d !== '') {
        return JSON.parse(d);
      }
      return null;
    })
    .filter((d: string) => d);
  return dosi;
}
