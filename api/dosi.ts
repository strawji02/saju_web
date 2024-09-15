import { Dosi } from '../utils/types';
import instance from './instance';

export async function getDosiNames() {
  const res = await instance.get('/dosi.php');
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
